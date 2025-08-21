function SupportPage() {
    return (
        <>
            <nav id="navbar-example2" className="navbar sticky-top bg-body-secondary px-3 mb-3">
                <a className="navbar-brand" href="#">
                    <img
                        src="/jake.svg"
                        alt="Logo"
                        width="50"
                        height="48"
                        className="d-inline-block align-content-center"
                    />
                </a>
                <ul className="nav nav-pills ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/public">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/support">Support Me</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default SupportPage;