let bucketList = []
let bucketInput = prompt('Enter a bucket list item if you wish')

while (bucketInput != ""){
    bucketList.push(bucketInput)
    bucketInput = prompt('Enter another bucket list item or nothing to end the input.')
    }
    
i = 0
while (i < bucketList.length){
    console.log(bucketList[i].toLowerCase())
    i += 1
    }