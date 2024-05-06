var prizes={}
fetch("https://api.nobelprize.org/v1/prize.json")
.then(x => x.json())
.then(y => {
    console.log(y)
    prizes=y
});