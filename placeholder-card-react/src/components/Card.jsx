export default function Card() {
    return (
        <div className="card">
            <div className="card-header">
                <img src="https://via.placeholder.com/150" alt="Placeholder" className="card-image placeholder" />
            </div>
            <div className="card-body">
                <h2 className="card-title placeholder">Card Title</h2>
                <p className="card-text placeholder">This is a placeholder card component. You can replace this text with your own content.</p>
            </div>
            <div className="card-footer">
                <div className="avatar placeholder"></div>
                <div className="user-info">
                    <h3 className="user-id placeholder"></h3>
                    <p className="user-signature placeholder"></p>
                </div>
            </div>
        </div>
    )
}