function trianglePyramid(N){
try {
    for(let r=1; r<=N; r++){
        for(let c=1; c<=r; c++){
                process.stdout.write(`${r}`);
        }
        process.stdout.write("\n")
    }
} catch (error) {
    console.log(error.message)
}
}

// when N=5
let n = 5
trianglePyramid(5)