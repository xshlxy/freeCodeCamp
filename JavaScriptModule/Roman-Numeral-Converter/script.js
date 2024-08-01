document.addEventListener("DOMContentLoaded", () => {
    const convertBtn = document.getElementById("convert-btn");
    const numberInput = document.getElementById("number");
    const output = document.getElementById("output");
  
    const romanNumeralMap = [
      { value: 1000, numeral: "M" },
      { value: 900, numeral: "CM" },
      { value: 500, numeral: "D" },
      { value: 400, numeral: "CD" },
      { value: 100, numeral: "C" },
      { value: 90, numeral: "XC" },
      { value: 50, numeral: "L" },
      { value: 40, numeral: "XL" },
      { value: 10, numeral: "X" },
      { value: 9, numeral: "IX" },
      { value: 5, numeral: "V" },
      { value: 4, numeral: "IV" },
      { value: 1, numeral: "I" }
    ];
  
    const convertToRoman = (num) => {
      if (!num) {
        return "Please enter a valid number";
      }
      if (num < 1) {
        return "Please enter a number greater than or equal to 1";
      }
      if (num >= 4000) {
        return "Please enter a number less than or equal to 3999";
      }
  
      let result = "";
      for (const { value, numeral } of romanNumeralMap) {
        while (num >= value) {
          result += numeral;
          num -= value;
        }
      }
      return result;
    };
  
    const handleConvert = () => {
      const number = parseInt(numberInput.value, 10);
      const romanNumeral = convertToRoman(number);
      output.textContent = romanNumeral;
    };
  
    convertBtn.addEventListener("click", handleConvert);
  
    numberInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        handleConvert();
      }
    });
  });