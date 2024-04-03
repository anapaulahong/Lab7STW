import conn from './connection.js'

export async function getAllBlogs() {
    try {
        const [rows] = await conn.query('SELECT * FROM blogs')
        return rows

    } catch (e) {
        console.log(e)
        return e
    }
}

export async function createBlog(title, content) {
    try {
        const [result] = await conn.query(`INSERT INTO blogs (title, content) VALUES ('${title}', '${content}')`)
        return result

    } catch (e) {
        console.log(e)
        return e
    }
}

export async function getAllPosts() {
    const [rows] = await conn.query('SELECT * FROM blog_posts')
    return rows
}

export async function createPost(title, content, imagePath) {
    const [result] = await db.query('INSERT INTO blog_posts (title, content, image_path) VALUES (?, ?, ?)', [title, content, imagePath])
    return result
}

export async function deleteBlog(id) {
    try {
        const [result] = await conn.query(`DELETE FROM blogs WHERE id = ${id}`)
        return result

    } catch (e) {
        console.log(e)
        return e
    }
}