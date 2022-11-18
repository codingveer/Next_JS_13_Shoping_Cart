export default function BlogDetailPage({params}){
    return(
        <div className="page">
            <h1> Hi there Blogs Detail Page: {params.slug}</h1>
        </div>
    )
}