# Technical Exercise: Typeahead

The goal of this exercise is to complete at least the "Basic Requirements"
while still organizing the code reasonably well, and using good React
development patterns.

Go on to "Stretch Goals" if there is enough time.

If you get to the "Extreme" stretch goals, you are free to pick any of them.

## General Guidelines

- Build your component in `src/app.js`.
- Focus on function over form to meet the "Basic Requirements" - default browser styles are fine.
- Use React Hooks as opposed to lifecycle methods.
- You are encouraged to use the entire internet during this exercise. Searching for libraries and documentation is part of software development.
- Feel free to ask for clarification during the exercise.

## Basic Requirements

1. As the user types in a text input field, a list of matching options should
   appear below it. <br /> - done
   The list should contain items from the `data` prop
   that **start** with the user entered value (case insensitive).
2. Every new character typed should filter the list. - done
3. The list should only appear when input is not empty. Whitespace is
   considered empty. - done
4. Clicking on a list item should populate the input with that item's
   string value and hide the list. - done

## Stretch Goals

5. Style the part of the option string the user has entered as **bold**. -done
6. Using CSS, highlight a list item with (dark background,
   light text) when the user mouses over it. -done

## Extreme Stretch Goals (Pick any)

7.  Add keyboard events to make the typeahead accessible by keyboard:

    - Using "Tab" and "Shift + Tab", the user should be able to focus the input field.
    - When the input field has focus, pressing the "Down" or "Up" arrow keys should visibly highlight each item in the list as it's selected. (The focused element should not change.)
    - Pressing the "Return" or "Spacebar" key when an item is selected should populate the input with that item's string value and hide the list.
    - **Bonus:** Pressing "Esc" key at any point while the input has focus should clear the value from the input field and hide the list.
    - **Bonus:** When "Down" arrow key is pressed while the last list item is selected, the selection should loop back to the beginning of the list and highlight the first item as selected. When "Up" arrow key is pressed while the first list item is selected, the selection should loop to the end of the list and highlight the last item as selected.

8.  Validate the input value: value should be alpha-numeric and exist in the list.
    If the value is invalid, show a red label above the input field with a short but specific message; i.e. "No match found", or "Please use only letters and numbers".
