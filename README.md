# Blooger Bootstrap

Example template for building a blog with Gatsby and using Bootstrap for 
styling.

## BLOG DEVELOPMENT

### To Do:
- [x] Add info sidebar with picture, short blurb, and icons with my skills
- [x] Cleanup styles on the sidebar, look at margin-right for image.
- [x] Look at adding a vertical line separating the sidebar and main content
- [x] Add favicons with fontawesome and add below sidebar in social icons section
- [x] Add links to LinkedIn and github pages
- [x] Add info top section that provides a short blurb, small picture and is only visible on mobile
- [x] Move Layout to components directory
- [x] Add **Footer** section
- [x] Add **About** page that provides rundown of me and my LinkedIn profile and skills
- [x] See if I can place assets in '/static' and refer via '/static/'
- [x] Add favicons and images so I can identify the tab on my browser
- [x] Add links to previous and next blog entries
- [x] Add **Netlify** plugin and deploy production version of the site
- [x] Link www.mcdaley.com to Netlify page
- [x] Dynamically change <title> and <meta name="og:title"> tags on every page, 
      "mcdaley.com: Mike Daley Product Manager and Software Developer",
      "mcdaley.com: About Mike Daley", "mcdaley.com: Blog Title", ...
- [x] Create carousel-caption-top
- [x] Change carousel title to bottom of screen for mobile devices.
- [] Remove Contact page and replace the contact links with mailto: links
- [x] Add "404 page not found" page ()
- [] Change all references of Michael to Mike
- [] Remove my cartoonified picture with black and white photo
- [] Write 2 blog posts
- [] Update json-ld to look for Mike or Michael for my first name
- [] Investigate reorganizing the site. Use the About page carousel
     as the home page, add blog snippets below the carousel, and create
     top-level nav for Blog, and Background
- [] Add my resume with logos (use LinkedIn profile)
- [] Add **Contact** section with a form to email me
- [] Add **Comments** section to blog posts
- [] Use MouseEnter and MouseLeave events to change CSS for next and previous post links
- [x] Copy the font styles in the example blog link that I have on my laptop
- [] Create standard text formatting in the website.
- [] Refactor the social icons in the Footer to the BloggerInfoSocialIcons
- [x] Copy repository to a new blog repository
- [] Create a blog logo
- [x] Add **SEO** plugin and configure in the site
- [] Add **Search** form using 3rd party plugin

### Bugs:
- [x] Figure out why the navbar logo and links move down when I click on About and Contact
- [x] Figure out how to style the links to the Previous and Next posts so that <p> and <h5> change color on hover.
- [x] Favicons are not displayed on Chrome

### Future Tasks
- [] For SEO I will want a <h1> tag on the page, but I currently do not have one on index.js. Should I add a hidden one?
- [] Add global text in gatsby-config.js as in tutorial to remove all hard-coded text
     that is specific to me (e.g., tagline, name, linked-in link,...)
- [] Investigate removing the PrismJS plugins for styling the <pre> and <code> blocks
- [] Look at using a vertical divider or background w/ linear gradient to implement
     vertical line that separates the blogger-info and list of blogger posts

## BLOG DOCUMENTATION

### Adding Favicon
* Place the icons/png images in the /static/icons directory
* Add a link to the images in the /src/components/layout.js with the following 
  code. **NOTE**, the rel field must equal 'icon' to be recognized as an icon
  by the browser. Add ```<link>``` for the 32x32 and 96x96 images.

```JSX
<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
```

* Gatsby will place the /static/icons/* files in the /public/icons directory
  in the compiled version of the website.

### Running in development
`gatsby develop`
