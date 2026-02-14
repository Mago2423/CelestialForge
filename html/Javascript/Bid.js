document.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.getElementById("usernameInput");
  const confirmBidBtn = document.getElementById("confirmBidBtn");
  const pendingBidDisplay = document.getElementById("pendingBidDisplay");
  const bidHistoryList = document.getElementById("bidHistoryList");

  // ===============================
  // Read pending bid
  // ===============================
  const tempPrice = Number(localStorage.getItem("pendingBid")) || 0;
  pendingBidDisplay.textContent = tempPrice;

  // ===============================
  // Confirm Bid
  // ===============================
  confirmBidBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const username = usernameInput.value.trim();
    if (!username) {
      alert("Enter your username");
      return;
    }

    try {
      const { error } = await supabaseClient
        .from("bids")
        .insert([{ user: username, amount: tempPrice }]);

      if (error) {
        console.error(error);
        alert("Insert failed: " + error.message);
        return;
      }

      // Save locally for Auction page
      localStorage.setItem("latestBidAmount", tempPrice);
      localStorage.setItem("latestBidUser", username);
      localStorage.removeItem("pendingBid");

      // Redirect AFTER success
      window.location.href = "../Auction/Auction.html";

    } catch (err) {
      console.error(err);
      alert("Failed to send bid.");
    }
  });

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

  loadBidHistory();
});
