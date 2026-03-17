//What is the output?

const obj = {
    env: "staging",
    getEnv: () => {
        return this.env;
    }
};
console.log(obj.getEnv());

// answer -> Undefined.