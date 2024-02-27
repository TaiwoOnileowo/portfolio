import React from "react"
import styles from "./Hero.module.css"
export const Hero=()=>{
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hello there!👋<br/> I'm Taiwo</h1>
            <p className={styles.description}>
                I'm a creative, skilled and dilligent Frontend Developer with the zeal of creating visualling appealing user-iterfaces and web applications.
            I have great appetite for learning new things. I would be happy to work with you on projetcs.
             Reach out to me to learn more.
             </p>
             <a href="mailto:taiwoonileowo17@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src="https://res.cloudinary.com/dixg66tpb/image/upload/f_webp/q_auto/dpr_auto/lwfhqvfwk7d57sw786al.jpg" alt="Hero-image"className={styles.heroImg} />
        <div className={styles.topBlur}/>
        <div className={styles.BottomBlur}/>



    </section>
    )
}