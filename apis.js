<<<<<<< HEAD
<<<<<<< HEAD
document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = e.target.querySelector('input[type="text"]').value;
  const contact_no = e.target.querySelector('input[type="tel"]').value;
  const email = e.target.querySelector('input[type="email"]').value;
  const ordered_items = e.target.querySelector(
    'select[name="fooditems"]'
  ).value;
  const address = e.target.querySelector("textarea").value;

  if (!name || !contact_no || !email || !ordered_items || !address) {
    alert("All fields are required!");
    return;
  }

  // Create the payload
  const orderData = {
    name,
    contact_no,
    email,
    ordered_items,
    address,
  };

  try {
    // Send POST request
    const response = await fetch("http://localhost:6001/v2/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    const result = await response.json();

    if (response.ok) {
      alert(result.message);
      e.target.reset();
    } else {
      alert(`Error: ${result.message}`);
    }
  } catch (error) {
    console.error("Error placing order:", error);
    alert("Failed to place the order. Please try again.");
  }
});
=======
=======
>>>>>>> added_provider_backend
document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = e.target.querySelector('input[type="text"]').value;
  const contact_no = e.target.querySelector('input[type="tel"]').value;
  const email = e.target.querySelector('input[type="email"]').value;
  const ordered_items = e.target.querySelector(
    'select[name="fooditems"]'
  ).value;
  const address = e.target.querySelector("textarea").value;

  if (!name || !contact_no || !email || !ordered_items || !address) {
    alert("All fields are required!");
    return;
  }

  // Create the payload
  const orderData = {
    name,
    contact_no,
    email,
    ordered_items,
    address,
  };

  try {
    // Send POST request
    const response = await fetch("http://localhost:6001/v2/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    const result = await response.json();

    if (response.ok) {
      alert(result.message);
      e.target.reset();
    } else {
      alert(`Error: ${result.message}`);
    }
  } catch (error) {
    console.error("Error placing order:", error);
    alert("Failed to place the order. Please try again.");
  }
});
<<<<<<< HEAD
>>>>>>> d92b234 (Modified And added provider backend and added a new provider dashboard)
=======
>>>>>>> added_provider_backend
