import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
// import Header from "./header"
import App from "./app"
import "./layout.css"

var speakers = [
{
"name": "Sarah Drasner",
"twitter": "sarah_edo",
"picture": "https://s3-us-west-2.amazonaws.com/dinosaurjs-assets/speakers/sarah_edo.jpg",
"title": "The Future of web Animation",
"abstract": "We talk a lot about how to animate on the web, and what’s possible in browsers today, but where is animation heading? In this talk, we’ll start with some bleeding edge techniques such as native-like page transitions with nuxt, but then we’ll push it further. The intersection of health and animation with biofeedback sensors and Vue, the future of 3d in the browser complete with interviews with people who are writing these specs… this talk will show that in terms of animation on the web, we’re just getting started."
},
{
"name": "Cassidy Williams",
"twitter": "cassidoo",
"picture": "https://s3-us-west-2.amazonaws.com/dinosaurjs-assets/speakers/cassidoo.jpg",
"title": "Building a Babel 7 Processor",
"abstract": "At CodePen, the team's main goal is to reduce the need for a workflow setup to quickly prototype, build, and/or show off your code. Cassidy recently built out one of the team's latest releases: an entirely new Babel processor from scratch. In this talk, she'll go through the reasoning behind the processor, how Babel plugins work, how the processor was added into the Pen editor, and the potential future for CodePen with that work in place."
},
{
"name": "Hayley Denbraver",
"twitter": "hayleydenb",
"picture": "https://s3-us-west-2.amazonaws.com/dinosaurjs-assets/speakers/hayleydenb.jpg",
"title": "A Postmortem on the Ingen Incident",
"abstract": "Hayley has prepared her report about the events that occurred on Isla Nublar and will present her findings to the board. Before we vote on whether to restart the project, we need to understand why the failure occurred and hear any recommendations."
},
{
"name": "Rich Trott",
"twitter": "trott",
"picture": "https://s3-us-west-2.amazonaws.com/dinosaurjs-assets/speakers/trott.jpg",
"title": "A Partial Taxonomy of Test Unreliability",
"abstract": "Humorous, fast-paced, and not-entirely-useless presentation of a taxonomy of causes for test unreliability, treated as though it were a biological taxonomy. Or not."
},
{
"name": "Saimon Sharif",
"twitter": "saimonsharif",
"picture": "https://s3-us-west-2.amazonaws.com/dinosaurjs-assets/speakers/saimonsharif.jpg",
"title": "Codemods: Refactoring JavaScript Using JavaScript",
"abstract": "For large, mature JavaScript codebases with many contributing engineers, it’s very difficult to modernize and change large pieces of extant code. When a library you use has a breaking change, there’s a lot of work to update older, neglected pieces of code. With codemods, engineers can programmatically refactor and create project-wide code changes to modernize their applications while saving hundreds of development hours and dramatically reducing tech debt."
},
{
"name": "Fred K. Schott",
"twitter": "fredkschott",
"picture": "https://s3-us-west-2.amazonaws.com/dinosaurjs-assets/speakers/fredkschott.jpg",
"title": "Pika: Reimagining the Registry",
"abstract": "Question the nature of your reality. JavaScript fatigue & overly-complex tooling can feel like inevitable problems in 2019, but in reality they are symptoms of a deeper problem. This talk explores some lesser-known issues in modern web development & the initiatives quietly working to solve them."
},
{
"name": "Lori Culbertson",
"twitter": "irongirltx",
"picture": "https://s3-us-west-2.amazonaws.com/dinosaurjs-assets/speakers/irongirltx.jpg",
"title": "The Art of Teaching",
"abstract": "Many senior developers feel compelled to give back to the tech community. They offer to teach classes, pair with less experienced engineers and serve as mentors. This talk will help those engineers learn the most effective teaching strategies used in high performing K-12 classrooms. It will cover: how to check for understanding, how to assess a student’s learning style, why you should avoid the use of sarcasm, when you should stop talking and listen"
},
{
"name": "Tejas Kumar",
"twitter": "tejaskumar_",
"picture": "https://s3-us-west-2.amazonaws.com/dinosaurjs-assets/speakers/tejaskumar_.jpg",
"title": "A Tale of Two Architectures",
"abstract": "Progressive Web Apps have the capability to unify application development: creating apps using Web Technologies that run on most other devices and feel at home, using native design patterns. This talk explores a real-world application, first built as a native application, later rebuilt as a PWA and the tradeoffs and benefits that come with each approach."
},
{
"name": "Jana Beck",
"twitter": "ipancreas",
"picture": "https://s3-us-west-2.amazonaws.com/dinosaurjs-assets/speakers/ipancreas.jpg",
"title": "Data Science in the Browser: DX & UX",
"abstract": "Web browsers are a particularly friendly environment for doing data science, but TensorFlow.js—among other tools—is developing rapidly and making it possible. In this talk, we’ll focus on the DX and UX of one particular clustering technique (t-stochastic neighbors embedding (tSNE)) in the browser."
},
{
"name": "Daria Caraway",
"twitter": "darcar31",
"picture": "https://s3-us-west-2.amazonaws.com/dinosaurjs-assets/speakers/darcar31.jpg",
"title": "How to Have a Amicable Breakup With a JavaScript Library",
"abstract": "Choosing a JavaScript library is a lot like dating: the longer you commit yourself, the messier it is when you decide to break up. Whether something better comes along, or the library is deprecated, changing a dependency often requires a lot of time or leaves the code in a less attractive state. Let me show you a technique that can ease the pain of this situation. "
}
]

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <App speakers={speakers}/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
