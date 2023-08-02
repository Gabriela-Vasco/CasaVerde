import './TestimonyCard.css'

export default function TestimonyCard({TestimonyText}){
    return (
        <div className="testimony-card">
            <blockquote>
                <p className="testimony-card__text">
                    {TestimonyText}
                </p>
            </blockquote>
        </div>
    )
}