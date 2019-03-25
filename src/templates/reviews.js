import React from "react";
import Link from "gatsby-link";
import Header from "../components/Header"

const NavLink = props => {
    if (!props.test) {
        return <Link to={props.url}>{props.text}</Link>;
    } else {
        return <span>{props.text}</span>;
    }
};

const IndexPage = ({ data, pathContext }) => {
    const { group, index, first, last } = pathContext;
    const previousUrl = index - 1 === 1 ? "" : (index - 1).toString();
    const nextUrl = (index + 1).toString();

    console.log(group)

    return (
        <div>
            <Header />
			<h1>Reviews</h1>
            {group.map(({ node }) => (
                <div key={node.slug} className={"post"} style={{ marginBottom: 50 }}>
                    <Link to={'post/' + node.slug}>
                        <h3>{node.title}</h3>
                    </Link>

                    <div className={"post-content"} dangerouslySetInnerHTML={{__html: node.excerpt}} />

                    {node.date}
                </div>
            ))}
            <div className="links">
                <NavLink test={first} url={"/posts/" + previousUrl} text="Página anterior" /> <p>    </p>
                <NavLink test={last} url={"/posts/" + nextUrl} text="Proxima pagina" />
            </div>
        </div>
    );
};
export default IndexPage;