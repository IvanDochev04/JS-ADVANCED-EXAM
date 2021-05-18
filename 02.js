class Story {
    constructor(title, creator) {
        this.title = title
        this.creator = creator
        this._likes = [];
        this._comment = [];
    }
    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`;
        }
        if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`;
        }
        return `${this._likes[0]} and ${this._likes.length-1} others like this story!`;
    };


    like(username) {
        if (this._likes.includes(username)) {
            throw Error(`You can't like the same story twice!`)
        }
        if (username===this.creator) {
            throw Error(`You can't like your own story!`)
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`

    }
    dislike(username) {
        if (!this._likes.includes(username)) {
            throw Error(`You can't dislike this story!`)
        }
        let index = this._likes.indexOf(username);
        this._likes.splice(index, 1)
        return `${username} disliked ${this.title}`

    }

    comment(username, content, id) {
        let comment
        if (!id) {
            id = this._comment.length + 1
        }


        comment = this._comment.find(a => a.id == id)
        if (!this._comment.includes(comment)) {
const Id=id;
const Username=username;
const Content=content;
            this._comment.push({ Id, Username, Content, Replies: [] });
            return `${username} commented on ${this.title}`;
        }
        else {
            const Id= id + `.${comment.replies.length + 1}`;
            const Username=username;
            const Content=content;
            
            comment.replies.push({ Id, Username, Content })
            return "You replied successfully";
        }

    }

    toString(sortType) {
        let result = [];
        if (sortType === 'asc') {
            this._comment.sort((a, b) => a.Id - b.Id).forEach(c => c.Replies.sort((a, b) => a.Id.localeCompare(b.Id)))
        }
        if (sortType === 'desc') {
            this._comment.sort((a, b) => b.Id - a.Id).forEach(c => c.Replies.sort((a, b) => a.Id.localeCompare(b.Id)).reverse())

        }
        if (sortType === 'username') {
            this._comment.sort((a, b) => a.Username.localeCompare(b.Username)).forEach(c => c.Replies.sort((a, b) => a.Username.localeCompare(b.Username)))
        }

        result.push(`Title: ${this.title}`);
        result.push(`Creator: ${this.creator}`);
        result.push(`Likes: ${this._likes.length}`);
        result.push('Comments:')
        for(const comment in this._comment) {
            result.push(`-- ${this._comment[comment].Id}. ${this._comment[comment].Username}: ${this._comment[comment].Content}`)
            this._comment[comment].Replies.forEach(r => result.push(`--- ${r.Id}. ${r.Username}: ${r.Content}`))
        }
return result.join('\n');

    }

};

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
