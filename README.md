# Gemini Clone

A web-based application inspired by Gemini that allows users to interact with a dynamic response system. The application supports user input through a button click or by pressing the "Enter" key, and it provides styled and structured responses dynamically.

---

## Features

- **Dynamic Response Generation:** User inputs are processed, and responses are dynamically generated and displayed.
- **Keyboard and Button Input Support:** Users can submit input either by clicking a button or pressing the "Enter" key.
- **Styled Responses:** Responses are formatted with custom HTML and CSS to provide a visually appealing interface.
- **Efficient Layout:** Aligns numbers and content properly using modern CSS techniques like Flexbox.

---

## Technologies Used

- **HTML:** For structuring the interface.
- **CSS:** For styling the components and ensuring a polished look.
- **JavaScript:** For adding interactivity and dynamically handling user input and responses.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Vandan-Bhangale/gemini-clone.git
   ```
2. Open `https://vandan-bhangale.github.io/Gemini-clone/` in your browser to view the application.

---

## Usage

1. Type a message into the input box.
2. Submit your message:
   - **Click the "Send" button.**
   - **Press the "Enter" key on your keyboard.**
3. View the dynamically generated response below the input field.

---

## Code Highlights

### Adding Event Listeners

This ensures user input is captured via both button clicks and the "Enter" key:

```javascript
sendbtn.addEventListener("click", () => {
    getGeminiResponce(msg.value, true);
    msg.value = "";
});

msg.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        getGeminiResponce(msg.value, true);
        msg.value = "";
    }
});
```
---

## Future Enhancements

- Add persistent storage for responses.
- Implement a chatbot-like backend for more intelligent responses.
- Make the UI responsive for mobile and tablet devices.
- Add support for themes and additional styling options.

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any features or improvements.

---

## Contact

For questions or suggestions, please reach out to [**vandan9804@gmail.com**](mailto\:your-email@example.com).

