// import Head from "next/head";
// import style from "../../styles/Style.module.css";
// import articlestyle from "../../styles/Article.module.css";
// import Layout from "../../component/layout";

// async function getPosts(slug) {
//   const res = await fetch(
//     `${process.env.BLOG_URL}/ghost/api/v3/content/posts/slug/about/?key=${process.env.CONTENT_API_KEY}`
//   ).then((res) => res.json());

//   const posts = res.posts;

//   return posts[0];
// }

// export const getStaticProps = async ({ params }) => {
//   const post = await getPosts();
//   console.log(post)
//   return {
//     revalidate: 10,
//     props: { post },
//   };
// };

// export const getStaticPaths = () => {
//   // paths -> slugs which are allowed
//   // fallback ->
//   return {
//     paths: [],
//     fallback: true,
//   };
// };

// export default function About({ post }) {
//   return (
//     <Layout about post={post}>
//       <Head>
//         <title>The Wizkid Blog</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//         <div className={`${style.container} ${articlestyle.article}`}>
//           <div className="main-wrapper">
//             <article>
//               <p>
//                 Ayodeji Ibrahim Balogun (born 16 July 1990), known
//                 professionally as Wizkid (sometimes stylized as WizKid), is a
//                 Nigerian singer and songwriter. He began recording music at the
//                 age of 11 and managed to release a collaborative album with the
//                 Glorious Five, a group he and a couple of his church friends
//                 formed. Wizkid signed a record deal with Empire Mates
//                 Entertainment (E.M.E) in 2009.
//               </p>
//               <p>
//                 He rose to prominence after releasing "Holla at Your Boy", the
//                 lead single from his debut studio album Superstar (2011). "Tease
//                 Me/Bad Guys", "Don't Dull", "Love My Baby", "Pakurumo" and
//                 "Oluwa Lo Ni" were also released as singles from the Superstar
//                 album. In February 2014, Wizkid became the first Nigerian
//                 musician to have over one million followers on Twitter. Ayo, his
//                 self-titled second studio album, was released in September 2014.
//                 It was supported by six singles: "Jaiye Jaiye", "On Top Your
//                 Matter", "One Question", "Joy", "Bombay" and "Show You the
//                 Money". Wizkid left E.M.E after his contract expired.
//               </p>
//               <p>
//                 In 2016, Wizkid achieved international recognition following his
//                 collaboration with Drake on the global hit, "One Dance", which
//                 reached number one in 15 countries, including the United States,
//                 the United Kingdom, Canada and Australia. He signed a
//                 multi-album deal with RCA Records in March 2017. His third
//                 studio album Sounds from the Other Side was released on 14 July
//                 2017. It serves as his major label debut and was primarily a
//                 Caribbean-influenced record. SFTOS was supported by five
//                 singles: "Daddy Yo", "Sweet Love", "Come Closer", "African Bad
//                 Gyal" and "Naughty Ride". Wizkid became the first Afrobeats
//                 artist to appear in the 2018 Guinness World Records for his
//                 contribution to "One Dance". His fourth album, Made in Lagos,
//                 was released on 30 October 2020.
//               </p>
//             </article>
//             <div className="social-links">
//               <h6>Share on:</h6>
//               <p>
//                 <a href="">
//                   <i className="fab fa-facebook-f"></i>
//                 </a>
//               </p>
//               <p>
//                 <a href="">
//                   <i className="fab fa-twitter"></i>
//                 </a>
//               </p>
//               <p>
//                 <a href="">
//                   <i className="fab fa-whatsapp"></i>
//                 </a>
//               </p>
//               <p>
//                 <a href="">
//                   <i className="fab fa-google-plus-g"></i>
//                 </a>
//               </p>
//             </div>
//             <div className={style.prevnext}>
//               <div>
//                 <span>
//                   <i className="fas fa-long-arrow-alt-left"></i> PREV
//                 </span>
//                 <a href="">How i became the baddest in Africa</a>
//               </div>
//               <div>
//                 <span>
//                   NEXT <i className="fas fa-long-arrow-alt-right"></i>
//                 </span>
//                 <a href="">How i became the baddest in Africa</a>
//               </div>
//             </div>
//           </div>
//         </div>
//     </Layout>
//   );
// }
