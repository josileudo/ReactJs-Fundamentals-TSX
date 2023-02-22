
import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/josileudo.png",
      name: "Josileudo Rodrigues",
      role: "Software developer"
    },
    content: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz" },
        { type: "paragraph", content: "no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
        { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-01-23 19:30:50")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/jga01.png",
      name: "James Goossen",
      role: "Software developer"
    },
    content: [
        { type: "paragraph", content: "Hello guys 👋" },
        { type: "paragraph", content: "Now, I push most a project on my portfolio" },
        { type: "paragraph", content: "Askan, bootcamp at atlantic. The name of project is DoctorCare 🚀" },
        { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-02-02 19:30:50")
  },
]


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          {posts.map(post => {
              return (
                <Post 
                  key={post.id}
                  post={post}
                />
              )
            })}
        </main>
      </div>
    </div>
    
  )
}
