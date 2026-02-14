document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll('#sectionNav .nav-link');
  const sections = document.querySelectorAll('.content-section');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.section;

      // Button styles
      buttons.forEach(b => {
        b.classList.remove('active', 'bg-primary', 'text-white');
        b.classList.add('text-secondary');
      });

      btn.classList.add('active', 'bg-primary', 'text-white');
      btn.classList.remove('text-secondary');

      // Section toggle
      sections.forEach(section => {
        section.classList.toggle('d-none', section.id !== target);
      });
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const plusBtn = document.getElementById("plusBtn");
  const minusBtn = document.getElementById("minusBtn");
  const bidBtn = document.getElementById("bidBtn");
  const priceDisplay = document.getElementById("priceDisplay");
  const currentBidText = document.getElementById("currentBidText");
  const bidHistoryList = document.getElementById("bidHistoryList");

  const step = 10000;
  let basePrice = 150000;
  let tempPrice = basePrice;

  // ===============================
  // Fetch current highest bid
  // ===============================
  async function fetchCurrentHighestBid() {
    try {
      const { data, error } = await supabaseClient
        .from("bids")
        .select("*")
        .order("amount", { ascending: false })
        .limit(1);

      if (error) throw error;

      if (data.length > 0) {
        basePrice = data[0].amount;
        tempPrice = basePrice;
        currentBidText.textContent = `${data[0].amount} Gold by ${data[0].user}`;
      } else {
        currentBidText.textContent = `${basePrice} Gold`;
      }

      updateDisplay();
    } catch (err) {
      console.error("Failed to fetch current bid:", err);
      currentBidText.textContent = `${basePrice} Gold`;
      updateDisplay();
    }
  }

  // ===============================
  // Load bid history
  // ===============================
  async function loadBidHistory() {
    try {
      const { data, error } = await supabaseClient
        .from("bids")
        .select("*")
        .order("amount", { ascending: false })
        .limit(10);

      if (error) throw error;

      bidHistoryList.innerHTML = "";

      data.forEach(bid => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between";
        li.textContent = bid.user;

        const span = document.createElement("span");
        span.textContent = `${bid.amount} Gold`;
        li.appendChild(span);

        bidHistoryList.appendChild(li);
      });
    } catch (err) {
      console.error("Failed to load bid history:", err);
    }
  }

  // ===============================
  // Button handlers
  // ===============================
  plusBtn.addEventListener("click", () => {
    tempPrice += step;
    updateDisplay();
  });

  minusBtn.addEventListener("click", () => {
    if (tempPrice > basePrice) {
      tempPrice -= step;
      updateDisplay();
    }
  });

  function updateDisplay() {
    priceDisplay.value = `G${tempPrice}`;
  }

  // ===============================
  // Bid button → save pending bid
  // ===============================
  bidBtn.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("pendingBid", tempPrice);
    window.location.href = bidBtn.href;
  });

  // ===============================
  // Init
  // ===============================
  fetchCurrentHighestBid();
  loadBidHistory();

  setInterval(() => {
    fetchCurrentHighestBid();
    loadBidHistory();
  }, 5000);
});
