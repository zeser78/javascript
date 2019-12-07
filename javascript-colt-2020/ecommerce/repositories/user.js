const fs = require("fs");

class UsersRepository {
  constructor(filename) {
    if (!filename) {
      throw new Error("Creating a repository require a filename");
    }
    this.filename = filename;
    try {
      fs.accessSync(this.filename);
    } catch (err) {
      fs.writeFileSync(this.filename, "[]");
    }
  }
  async getAll() {
    return JSON.parse(
      await fs.promises.readFile(this.filename, {
        encoding: "utf8"
      })
    );
    // Open the file called this.filename
    // const contents =
    // Read its content

    // parse the content
    // const data = JSON.parse(contents);
    // Return the parsed data
  }
  async create(attrs) {
    const records = await this.getAll();
    records.push(attrs);
  }
}

const test = async () => {
  const repo = new UsersRepository("user.json");
  const users = await repo.getAll();
  console.log(users);
};
