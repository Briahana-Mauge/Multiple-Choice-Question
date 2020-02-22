export const quizzes = [
    {
      id: 0,
      title: 'Basics of HTML',
      questions: [
        {
          text: 'Which element is used for a top-level heading?',
          correctAnswer: 'h1',
          incorrectAnswers: ['div', 'h0', 'p'],
        },
        {
          text: 'Which element is used for a page break?',
          correctAnswer: 'br',
          incorrectAnswers: ['div', 'break', 'p'],
        },
        {
          text: 'Which markup makes a link?',
          correctAnswer: "<a href='/cats' />",
          incorrectAnswers: [
            "<href a='/cats' />",
            "<a src='/cats' />",
            "<link href='/cats' />",
          ],
        },
        {
          text: 'Which markup correctly creates an image?',
          correctAnswer: "<img src='cat.jpg' />",
          incorrectAnswers: [
            "<src img='cat.jpg' />",
            '<img>cat.jpg</img>',
            '<src>cat.jpg</img>',
          ],
        },
      ],
    },
    {
        id: 1,
      title: 'Basics of CSS',
      questions: [
        {
          text: 'Which markup correctly assigns HTML element a CSS class?',
          correctAnswer: "<div class='cat'>hi</div>",
          incorrectAnswers: [
            "<div className='cat'>hi</div>",
            "<div>hi</div className='cat'>",
            "<div class='cat'>hi</div class='cat'>",
          ],
        },
        {
          text:
            'Which markup is CSS that sets all cat classes to have pink font?',
          correctAnswer: '.cat { color: pink; }',
          incorrectAnswers: ['cat { color: pink; }', '<cat> color: pink; </cat>'],
        },
        {
          text:
            'Which markup is CSS that sets all elements of id "dog" to be bold?',
          correctAnswer: '#dog { font-weight: bold; }',
          incorrectAnswers: ['dog { weight: bold; }', '.dog { font: bold; }'],
        },
      ],
    },
    {
        id: 2,
        title: 'We Love Disney',
        questions: [
          {
            text: 'What\'s the name of the accident-prone ant in A Bug\'s Life?',
            correctAnswer: "Flik",
            incorrectAnswers: [
              "John",
              "Sid",
              "Harley",
            ],
          },
          {
            text:
              'Who was Snow White\'s enemy?',
            correctAnswer: 'The Evil Queen',
            incorrectAnswers: ['Maleficent', 'Scar', 'Cruella De Vil'],
          },
          {
            text:
              'Before joining Woody and the gang in Toy Story, where was Buzz Lightyear stationed?',
            correctAnswer: 'Gamma Quadrant of Sector 4',
            incorrectAnswers: ['Alpha Centauri', 'Cardiff', 'The Moon'],
          },
          {
            text:
              'In The Incredibles, where do the Parr family live?',
            correctAnswer: 'Municiberg',
            incorrectAnswers: ['Los Angeles', 'Seattle', 'New York'],
          },
        ],
      },
  ];
  