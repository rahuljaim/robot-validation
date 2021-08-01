# I'm not a robot

We have to verify that the user of your app is a human and not a robot.
Acceptance Criteria:-

- Render 6 images out of which 5 are different and 1 is copy of one from the previous 5.
- Randomly arrange all 6 images every time the page reloads.
- Every time choose a random image to repeat.
- On one or more clicks on images, Reset button should appear with id="reset" and should disappear when it is clicked (i.e., after state is reset to initial state).
- Image tags should have data attribute with values img1, img2, img3, img4 and img5. One of them should repeat as one image repeats. That means, identical images should have identical value for data-ns-test attribute
- When two images are clicked, a verify button should appear which will be used to verify the user. It should have innerHTML Verify and id="btn". Even for more than 2 clicks, the verify button should not be rendered.
- When two images are selected and both the images are identical, then render a p tag with id="para", containing the text You are a human. Congratulations!. If the images clicked are different then render a p tag with id="para", containing the text We can't verify you as a human. You selected the non-identical tiles.
- Ensuring that double clicking the same image does not render the verify button.
- Use click event to govern the image selection.
