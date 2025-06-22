Personal Profile Card Assignment

Files:
- index.html
- style.css
- readme.txt

CSS Types Used:
1. Inline CSS:
   - Used on the <section> with class "profile-card" to set a background color.

2. Internal CSS:
   - Placed within the <style> tag in the <head> of index.html.
   - Used for the .bio class, group selectors (h1, h2), and the descendant selector .contact p.

3. External CSS:
   - Linked via <link rel="stylesheet" href="style.css"> in index.html.
   - Handles the majority of the card's styling, including element selectors, class and ID selectors, attribute selectors, universal selector, and hover effects.

Selectors Used:
- Element Selector: h1, h2, ul, li, etc. (Both in internal and external CSS.)
- Class Selector: .profile-card, .bio, .contact
- ID Selector: #profile-pic (for profile image)
- Group Selector: h1, h2 (Internal CSS for fonts)
- Universal Selector: * (Resets margin/padding, box-sizing)
- Descendant Selector: .contact p (Internal CSS for contact section paragraphs)
- Attribute Selector: a[href^="https"], a[href^="mailto"] (External links and mailto links styled differently)
- Bonus: Hover effect on contact links using .contact a:hover

How to Use:
- Open index.html in your browser to see the styled profile card.
- Make sure style.css is in the same directory as index.html for styles to apply.

Repository Name:
summer-school-online-day-2

Created by: Tushar Navneet