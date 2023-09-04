import { useState } from 'react';

const PostMsg = () => {
    const [content, setcontent] = useState("");
    const [name, setName] = useState("");
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = { content, name };
        setIsPending(true);
        fetch('http://100.24.66.164:1000/api/msg', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        }).then(res => {
            console.log("new msg added");
            setIsPending(false);
            // Clear the input fields after successful submission
            setcontent("");
            setName("");
        });

        // calling the api to delete the messages
        fetch('http://100.24.66.164:1000/api/msg', {
            method: 'DELETE',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        }).then(res => {
            console.log("Messages deleted");
        });
    }
    // panel to show messages with the name of the person who posted it which gets by calling the api
    

    return (
        <>
        <div className="container mt-5">
            <h1>Post a message</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <input type="text" className="form-control" id="message" required value={content} onChange={(e) => setcontent(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name (optional)</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                {!isPending && <button type="submit" className="btn btn-primary">Submit</button>}
                {isPending && <button type="button" className="btn btn-primary" disabled>Submitting...</button>}
            </form>
        </div>
        </>
    )
}

export default PostMsg;
