import '../../Frontpage.css'
import '../pageComponents/SingleArticlePage.css'
import VotesCounter from './VotesCounter';

const FullArticle = ({ user, article }) => {
    return (
        <>
            <main className="FullArticle__mainArticle">
                <p className="FullArticle__Author">Author: {article.author}</p>
                <p className="FullArticle__ArticleText">
                    {article.body}
                </p>
                <section
                    className="FullArticle__votesCounter">
                    <VotesCounter
                        type={"articles"}
                        votes={article.votes}
                        id={article.article_id}
                        user={user}
                    />
                </section>
            </main>
        </>
    );
}

export default FullArticle;