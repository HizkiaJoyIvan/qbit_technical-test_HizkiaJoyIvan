const comments = [
    {
      commentId: 1,
      commentContent: 'Hai',
      replies: [
        {
          commentId: 11,
          commentContent: 'Hai juga',
          replies: [
            {
              commentId: 111,
              commentContent: 'Haai juga hai jugaa',
            },
            {
              commentId: 112,
              commentContent: 'Haai juga hai jugaa',
            },
          ],
        },
        {
          commentId: 12,
          commentContent: 'Hai juga',
          replies: [
            {
              commentId: 121,
              commentContent: 'Haai juga hai jugaa',
            },
          ],
        },
      ],
    },
    {
      commentId: 2,
      commentContent: 'Halooo',
    },
  ]

  function countTotalComments(commentsArray) {
    let totalComments = 0
  
    function countRecursive(comment) {
      totalComments += 1
  
      if (comment.replies && comment.replies.length > 0) {
        comment.replies.forEach((reply) => {
          countRecursive(reply)
        })
      }
    }
  
    commentsArray.forEach((comment) => {
      countRecursive(comment)
    })
  
    return totalComments
  }


  console.log(`Total komentar: ${countTotalComments(comments)}`)

  //Soal ini sendiri adalah contoh manipulasi nested array, di mana untuk 
  //menghitung jumlah atribut commentContent dilakukan fungsi rekursi