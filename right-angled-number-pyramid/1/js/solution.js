N = 3
function rightTrianglePyramid(L){
  for(let r=1; r<=N; r++ ){
    for(let c=1; c<=N; c++){
        if(c<=r){
            process.stdout.write(c)
        }
    }
    process.stdout.write("\n")
  }
}

// when N = 5
rightTrianglePyramid("5")