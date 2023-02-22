import { useState } from 'react';
import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css';

interface CommentProps {
  content: string;
  onDeleteComment: ((comment: string) => void)
}

export function Comment({content, onDeleteComment}: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);
  
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment(){
    setLikeCount(() => likeCount + 1 );
  }
  
  return (
    <div className={styles.comment}>
      <Avatar hasBorder = {false} src="https://github.com/josileudo.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorCommentAndTime}>
              <strong>
                Josileudo Rodrigues <p>Você</p>
              </strong>
              <time
                title="28 de janeiro de 2023"
                dateTime="2023-01-28 13:00:00"
              >
                Publicado há 1h
              </time>
            </div>

            <button onClick={handleDeleteComment} title="comment delete">
              <Trash size={ 24 }/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}> 
            <ThumbsUp /> Aplaudir
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
