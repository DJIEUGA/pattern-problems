function rightTriangle(N){
    for(let r=0; r<N; r++){
        for(let c=0; c<N; c++){
            if(c <= r){
                process.stdout.write("*\t")
            }
        }
        process.stdout.write("\n")
    }
}

// when n = 5
rightTriangle(5)