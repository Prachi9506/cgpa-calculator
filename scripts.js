document.addEventListener("DOMContentLoaded", function() {
    addFields();
  });
  
  function addFields() {
    const inputFields = document.getElementById("input-fields");
    const fieldSet = document.createElement("div");
    
    fieldSet.innerHTML = `
      <input type="number" placeholder="Enter Marks (out of 100)" required>
      <input type="number" placeholder="Enter Credit Hours" required>
    `;
    
    inputFields.appendChild(fieldSet);
  }
  
  function calculateCGPA() {
    const inputFields = document.getElementById("input-fields").getElementsByTagName("div");
    let totalCredits = 0;
    let totalPoints = 0;
    
    Array.from(inputFields).forEach(field => {
      const marks = field.querySelector("input[type='number']:nth-child(1)").value;
      const credits = field.querySelector("input[type='number']:nth-child(2)").value;
      
      if (marks && credits) {
        const gradePoint = (marks / 10) - 0.5;
        totalPoints += gradePoint * credits;
        totalCredits += parseFloat(credits);
      }
    });
  
    const cgpa = totalPoints / totalCredits;
    let grade ="";
    if(cgpa>9) grade = "A+";
    else if(cgpa>8) grade = "A";
    else if(cgpa>7) grade = "B+";
    else if(cgpa>6) grade = "B";                // grading system is contributed by The_PiyushGoel;
    else if(cgpa>5) grade = "C";
    else if(cgpa>4) grade = "D";
    else grade = "F";
    document.getElementById("result").innerText = `Your CGPA is ${cgpa.toFixed(2)} & Grade is ${grade}`;
  }
  