// Person Class
class Person {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }

    printDetails() {
        console.log(`Name: ${this.name}, Phone: ${this.phone}`);
    }
}

// Student Class inheriting from Person
class Student extends Person {
    constructor(name, phone, rollNo) {
        super(name, phone);
        if (rollNo <= 0) throw new Error("Roll number must be greater than zero");
        this.rollNo = rollNo;
    }

    printDetails() {
        super.printDetails();
        console.log(`Roll No: ${this.rollNo}`);
    }
}

// Function to validate the form
function validateForm() {
    const tagline = document.getElementById('tagline').value.trim();
    const phone = document.getElementById('phone').value.trim();

    let isValid = true;

    // Validate Tagline length
    if (tagline.length > 100) {
        alert("Tagline should not exceed 100 characters.");
        isValid = false;
    }

    // Validate Phone Number
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Phone number must be exactly 10 digits.");
        isValid = false;
    }

    return isValid;
}

// Function to process the order
function processOrder() {
    if (!validateForm()) return;

    const tagline = document.getElementById('tagline').value.trim();
    const color = document.getElementById('color').value;
    const size = document.getElementById('size').value;
    const quantity = document.getElementById('quantity').value;
    const deliveryDate = document.getElementById('delivery-date').value;
    const recipientName = document.getElementById('recipient-name').value.trim();
    const address = document.getElementById('address').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const comments = document.getElementById('comments').value.trim();

    // Create a Person object
    const person = new Person(recipientName, phone);

    // Generate a receipt
    const receiptDate = new Date();
    const receiptDetails = `
        <strong>Tagline:</strong> ${tagline}<br>
        <strong>Color:</strong> ${color}<br>
        <strong>Size:</strong> ${size}<br>
        <strong>Quantity:</strong> ${quantity}<br>
        <strong>Delivery Date:</strong> ${deliveryDate}<br>
        <strong>Recipient's Name:</strong> ${person.name}<br>
        <strong>Address:</strong> ${address}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Phone Number:</strong> ${person.phone}<br>
        <strong>Comments:</strong> ${comments}<br>
        <strong>Date:</strong> ${receiptDate.toLocaleDateString()} ${receiptDate.toLocaleTimeString()}
    `;

    // Show the receipt
    document.getElementById('receiptDetails').innerHTML = receiptDetails;
    document.getElementById('receipt').style.display = 'block';

    // Print details using Student class (for demonstration)
    try {
        const rollNo = 1; // Example roll number
        const student = new Student(person.name, person.phone, rollNo);
        student.printDetails();
    } catch (error) {
        alert(error.message);
    }
}

// Arrow function example
const showAlert = (message) => alert(message);

// Example usage of arrow function
showAlert("Welcome to the T-Shirt Order Page");
