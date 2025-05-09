function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}


// payment
document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const paymentMethod = document.getElementById('paymentMethod').value;
    const amount = document.getElementById('amount').value;
    const transactionId = document.getElementById('transactionId').value.trim();
    const senderNumber = document.getElementById('senderNumber').value.trim();
  
    // ফর্ম ফাঁকা থাকলে অ্যালার্ট
    if (!paymentMethod || !amount || !transactionId || !senderNumber) {
      alert('অনুগ্রহ করে সকল তথ্য সঠিকভাবে পূরণ করুন।');
      return;
    }
  
    // ট্রানজেকশন আইডি ভ্যালিডেশন (কমপক্ষে 8 অক্ষর, শুধুমাত্র a-zA-Z0-9)
    const txIdPattern = /^[a-zA-Z0-9]{8,}$/;
    if (!txIdPattern.test(transactionId)) {
      alert('আপনার ট্রানজেকশন আইডি টি ভুল আছে, আবার চেষ্টা করুন।');
      return;
    }
  
    // সফল সাবমিশন
    alert('আপনার পেমেন্ট তথ্য সফলভাবে সাবমিট করা হয়েছে। ধন্যবাদ!');
    document.getElementById('paymentForm').reset();
  });
  

  // -------------------------------------------------


  document.getElementById('paymentForm').addEventListener('submit', function(e) {
      e.preventDefault();
  
      const paymentMethod = document.getElementById('paymentMethod').value;
      const amount = document.getElementById('amount').value;
      const transactionId = document.getElementById('transactionId').value;
      const senderNumber = document.getElementById('senderNumber').value;
  
      if (!paymentMethod || !amount || !transactionId || !senderNumber) {
        alert('অনুগ্রহ করে সকল তথ্য সঠিকভাবে পূরণ করুন।');
        return;
      }
  
      // এখানে আপনি AJAX এর মাধ্যমে সার্ভারে ডেটা পাঠাতে পারেন
      // উদাহরণস্বরূপ:
      
      fetch('/verify-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          paymentMethod,
          amount,
          transactionId,
          senderNumber
        })
      })
      .then(response => response.json())
      .then(data => {
        // সার্ভার থেকে প্রাপ্ত প্রতিক্রিয়া অনুযায়ী ব্যবস্থা নিন
      })
      .catch(error => {
        console.error('Error:', error);
      });
      
  
      alert('অনুগ্রহ করে সকল তথ্য সঠিকভাবে পূরণ করুন। ধন্যবাদ !');
      // ফর্ম রিসেট করুন
      document.getElementById('paymentForm').reset();
    });