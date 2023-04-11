import Link from 'next/link'
import styles from '@/styles/Home.module.css'
export default function Blogpost({ title, coverphoto, slug, url, content, }) {
    // console.log('content blog', content.text);
    return (
        <div className={styles.cardMainDiv} >
        
            <div className={styles.title}>
                <h1>Heading</h1>
                <h2>{title}</h2>
            </div>
       

                <div className={styles.photoDate}>
                    <img
                  className={styles.photo}
                    
                    src={coverphoto.url} alt='image' />

                </div>
     

            <div className={styles.maindetails}>
            <div className={styles.details}>
                <h2>{content.text}</h2>
            </div>
            </div>
        </div>
    )
}