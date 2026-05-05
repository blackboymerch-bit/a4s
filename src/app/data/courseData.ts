export const courseData: Record<string, any> = {
  'music-theory-101': {
    id: 'music-theory-101',
    title: 'Music Theory Fundamentals',
    description: 'Master the basics of music theory including scales, chords, and harmony',
    duration: '6 hours',
    color: 'from-blue-500 to-cyan-500',
    lessons: [
      {
        title: 'Introduction to Music Notation',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        duration: '12:30',
        description: 'Learn to read music notation, understand the staff, clefs, and note values',
        keyPoints: [
          'Understanding the musical staff and clefs',
          'Reading note names and their positions',
          'Note durations and time signatures',
          'Rests and their importance in music'
        ]
      },
      {
        title: 'Major and Minor Scales',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        duration: '15:45',
        description: 'Explore the construction and patterns of major and minor scales',
        keyPoints: [
          'Whole and half step patterns',
          'Major scale formula: W-W-H-W-W-W-H',
          'Natural, harmonic, and melodic minor scales',
          'Scale degrees and their functions'
        ]
      },
      {
        title: 'Intervals and Their Quality',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        duration: '14:20',
        description: 'Master the identification and construction of musical intervals',
        keyPoints: [
          'Counting intervals from unison to octave',
          'Major, minor, perfect, augmented, and diminished intervals',
          'Interval inversion rules',
          'Consonant vs dissonant intervals'
        ]
      },
      {
        title: 'Building Triads',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        duration: '16:10',
        description: 'Learn to construct and identify major, minor, diminished, and augmented triads',
        keyPoints: [
          'Root, third, and fifth relationships',
          'Major triad: Major 3rd + minor 3rd',
          'Minor triad: Minor 3rd + major 3rd',
          'Diminished and augmented triads'
        ]
      },
      {
        title: 'Chord Progressions',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        duration: '18:25',
        description: 'Understand common chord progressions and harmonic movement',
        keyPoints: [
          'Roman numeral analysis',
          'Common progressions: I-IV-V-I, ii-V-I',
          'Functional harmony: tonic, subdominant, dominant',
          'Circle of fifths progressions'
        ]
      },
      {
        title: 'Seventh Chords',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        duration: '17:30',
        description: 'Explore the richness of seventh chords and their applications',
        keyPoints: [
          'Major 7th, minor 7th, dominant 7th',
          'Half-diminished and fully diminished 7th chords',
          'Voice leading with seventh chords',
          'Common seventh chord progressions'
        ]
      },
      {
        title: 'Key Signatures',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
        duration: '13:15',
        description: 'Master all major and minor key signatures',
        keyPoints: [
          'Circle of fifths and fourths',
          'Sharp keys: order of sharps',
          'Flat keys: order of flats',
          'Relative major and minor relationships'
        ]
      },
      {
        title: 'Rhythm and Meter',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
        duration: '15:50',
        description: 'Develop rhythmic literacy and understanding of meter',
        keyPoints: [
          'Simple vs compound meters',
          'Common time signatures: 4/4, 3/4, 6/8',
          'Syncopation and rhythmic displacement',
          'Polyrhythms and cross-rhythms'
        ]
      },
      {
        title: 'Melodic Analysis',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
        duration: '16:40',
        description: 'Analyze melodies and understand their construction',
        keyPoints: [
          'Melodic contour and shape',
          'Motifs and sequences',
          'Cadences: authentic, plagal, deceptive',
          'Phrase structure and periods'
        ]
      },
      {
        title: 'Introduction to Harmony',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        duration: '19:20',
        description: 'Understand harmonic principles and voice leading',
        keyPoints: [
          'Four-part harmony rules',
          'Parallel motion restrictions',
          'Common tone connections',
          'Harmonic rhythm'
        ]
      },
      {
        title: 'Non-Chord Tones',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
        duration: '14:55',
        description: 'Master passing tones, neighbor tones, and other embellishments',
        keyPoints: [
          'Passing tones: diatonic and chromatic',
          'Neighbor tones and escape tones',
          'Suspensions and retardations',
          'Appoggiaturas and anticipations'
        ]
      },
      {
        title: 'Modulation Techniques',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
        duration: '17:45',
        description: 'Learn to change keys smoothly within a composition',
        keyPoints: [
          'Pivot chord modulation',
          'Direct modulation',
          'Common tone modulation',
          'Closely related keys vs distant keys'
        ]
      }
    ],
    quiz: {
      passingScore: 70,
      questions: [
        {
          question: 'What is the interval from C to G?',
          options: ['Perfect 4th', 'Perfect 5th', 'Major 6th', 'Perfect octave'],
          correctAnswer: 1,
          explanation: 'C to G is a Perfect 5th (7 semitones)'
        },
        {
          question: 'Which scale degree is the dominant?',
          options: ['1st degree', '3rd degree', '5th degree', '7th degree'],
          correctAnswer: 2,
          explanation: 'The dominant is the 5th scale degree'
        },
        {
          question: 'What notes make up a C major triad?',
          options: ['C-E-G', 'C-Eb-G', 'C-E-G#', 'C-D-G'],
          correctAnswer: 0,
          explanation: 'C major triad consists of C (root), E (major 3rd), and G (perfect 5th)'
        },
        {
          question: 'How many sharps are in the key of D major?',
          options: ['1', '2', '3', '4'],
          correctAnswer: 1,
          explanation: 'D major has 2 sharps: F# and C#'
        },
        {
          question: 'What is the formula for a major scale?',
          options: [
            'W-W-H-W-W-W-H',
            'W-H-W-W-H-W-W',
            'H-W-W-H-W-W-W',
            'W-W-W-H-W-W-H'
          ],
          correctAnswer: 0,
          explanation: 'Major scale: Whole-Whole-Half-Whole-Whole-Whole-Half'
        }
      ]
    }
  },
  'piano-basics': {
    id: 'piano-basics',
    title: 'Piano for Beginners',
    description: 'Learn piano from scratch with hands-on exercises and practice routines',
    duration: '8 hours',
    color: 'from-purple-500 to-pink-500',
    lessons: [
      {
        title: 'Piano Basics and Posture',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        duration: '10:30',
        description: 'Learn proper sitting position, hand shape, and keyboard orientation',
        keyPoints: [
          'Proper bench height and distance',
          'Curved fingers and relaxed wrists',
          'Finding Middle C and keyboard layout',
          'Understanding black and white key patterns'
        ]
      },
      {
        title: 'Five-Finger Patterns',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        duration: '12:20',
        description: 'Master basic five-finger positions in C major',
        keyPoints: [
          'C position: C-D-E-F-G',
          'Hand coordination exercises',
          'Playing with each hand separately',
          'Simple melodies in C position'
        ]
      },
      {
        title: 'Reading Treble Clef',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        duration: '11:45',
        description: 'Learn to read notes in the treble clef for right hand',
        keyPoints: [
          'Line notes: E-G-B-D-F',
          'Space notes: F-A-C-E',
          'Ledger lines above and below the staff',
          'Sight-reading simple melodies'
        ]
      },
      {
        title: 'Reading Bass Clef',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        duration: '11:30',
        description: 'Master bass clef notation for left hand',
        keyPoints: [
          'Line notes: G-B-D-F-A',
          'Space notes: A-C-E-G',
          'Connecting treble and bass clefs',
          'Left hand independence exercises'
        ]
      },
      {
        title: 'Playing Hands Together',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        duration: '14:15',
        description: 'Develop coordination to play both hands simultaneously',
        keyPoints: [
          'Start slow and practice each hand',
          'Play in unison (same notes)',
          'Play in contrary motion',
          'Simple two-hand pieces'
        ]
      },
      {
        title: 'Basic Rhythm Patterns',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        duration: '13:50',
        description: 'Understand quarter notes, half notes, and whole notes',
        keyPoints: [
          'Counting in 4/4 time',
          'Quarter notes and rests',
          'Half notes and whole notes',
          'Clapping and playing rhythms'
        ]
      },
      {
        title: 'Introduction to Chords',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
        duration: '15:20',
        description: 'Play your first piano chords: C, F, and G major',
        keyPoints: [
          'C major chord: C-E-G',
          'F major chord: F-A-C',
          'G major chord: G-B-D',
          'Simple chord progressions'
        ]
      },
      {
        title: 'Scales and Fingering',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
        duration: '16:40',
        description: 'Learn C major scale with proper fingering',
        keyPoints: [
          'Right hand fingering: 1-2-3-1-2-3-4-5',
          'Left hand fingering: 5-4-3-2-1-3-2-1',
          'Thumb crossing technique',
          'Practicing scales hands together'
        ]
      },
      {
        title: 'Dynamics and Expression',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
        duration: '12:25',
        description: 'Add musicality through volume control and phrasing',
        keyPoints: [
          'Piano (soft) vs forte (loud)',
          'Crescendo and diminuendo',
          'Playing musically, not mechanically',
          'Phrasing like singing'
        ]
      },
      {
        title: 'Pedaling Basics',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        duration: '13:30',
        description: 'Learn to use the sustain pedal effectively',
        keyPoints: [
          'When to press and release the pedal',
          'Syncopated pedaling technique',
          'Avoiding muddy sound',
          'Pedaling exercises'
        ]
      },
      {
        title: 'Playing Simple Songs',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
        duration: '17:20',
        description: 'Put it all together with beginner-friendly pieces',
        keyPoints: [
          'Ode to Joy',
          'Mary Had a Little Lamb',
          'Twinkle Twinkle Little Star',
          'Practice strategies for learning new songs'
        ]
      },
      {
        title: 'Sight Reading Tips',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
        duration: '14:40',
        description: 'Develop the skill to play music at first sight',
        keyPoints: [
          'Look ahead while playing',
          'Identify patterns and intervals',
          'Keep a steady tempo',
          'Daily sight-reading practice'
        ]
      },
      {
        title: 'Arpeggios and Broken Chords',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        duration: '15:10',
        description: 'Play chords one note at a time for beautiful patterns',
        keyPoints: [
          'What is an arpeggio',
          'C major arpeggio fingering',
          'Alberti bass pattern',
          'Arpeggios in both hands'
        ]
      },
      {
        title: 'Building a Practice Routine',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        duration: '16:50',
        description: 'Create effective practice habits for steady improvement',
        keyPoints: [
          'Warm-up exercises and scales',
          'Technical studies',
          'Repertoire practice',
          'Cool-down and review'
        ]
      },
      {
        title: 'Your First Performance',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        duration: '18:30',
        description: 'Prepare mentally and technically for playing in front of others',
        keyPoints: [
          'Managing performance anxiety',
          'Memory techniques',
          'Recovery from mistakes',
          'Enjoying the musical moment'
        ]
      }
    ],
    quiz: {
      passingScore: 70,
      questions: [
        {
          question: 'Which fingers are numbered 1 and 5 in piano fingering?',
          options: [
            'Index finger and pinky',
            'Thumb and pinky',
            'Thumb and ring finger',
            'Index and ring finger'
          ],
          correctAnswer: 1,
          explanation: 'Finger 1 is the thumb, finger 5 is the pinky'
        },
        {
          question: 'What notes make up a C major chord?',
          options: ['C-D-E', 'C-E-G', 'C-F-A', 'C-E-A'],
          correctAnswer: 1,
          explanation: 'C major chord is C-E-G'
        },
        {
          question: 'In 4/4 time, how many beats does a whole note get?',
          options: ['1 beat', '2 beats', '3 beats', '4 beats'],
          correctAnswer: 3,
          explanation: 'A whole note gets 4 beats in 4/4 time'
        },
        {
          question: 'What does "forte" mean in music?',
          options: ['Soft', 'Loud', 'Fast', 'Slow'],
          correctAnswer: 1,
          explanation: 'Forte means to play loudly'
        },
        {
          question: 'Which pedal is the sustain pedal?',
          options: [
            'Left pedal',
            'Middle pedal',
            'Right pedal',
            'There is no sustain pedal'
          ],
          correctAnswer: 2,
          explanation: 'The right pedal is the sustain (damper) pedal'
        }
      ]
    }
  },
  'digital-production': {
    id: 'digital-production',
    title: 'Digital Music Production',
    description: 'Create professional tracks using DAW software and production techniques',
    duration: '12 hours',
    color: 'from-green-500 to-emerald-500',
    lessons: [
      {
        title: 'Introduction to DAWs',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        duration: '14:30',
        description: 'Overview of Digital Audio Workstations and choosing the right one',
        keyPoints: [
          'What is a DAW and why you need one',
          'Popular DAWs: Ableton, FL Studio, Logic Pro, Pro Tools',
          'Interface basics: tracks, mixer, timeline',
          'Setting up your first project'
        ]
      },
      {
        title: 'Audio vs MIDI',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        duration: '12:45',
        description: 'Understanding the difference between audio and MIDI tracks',
        keyPoints: [
          'What is MIDI data',
          'Recording audio vs programming MIDI',
          'Benefits of each format',
          'When to use audio or MIDI'
        ]
      },
      {
        title: 'Setting Up Your Studio',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        duration: '16:20',
        description: 'Essential gear and acoustic treatment for home studios',
        keyPoints: [
          'Audio interface selection',
          'Monitor speakers vs headphones',
          'MIDI controllers and keyboards',
          'Basic acoustic treatment'
        ]
      },
      {
        title: 'Recording Techniques',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        duration: '18:15',
        description: 'Capture high-quality audio recordings',
        keyPoints: [
          'Microphone types and placement',
          'Setting proper input levels',
          'Recording vocals',
          'Recording instruments'
        ]
      },
      {
        title: 'Beat Making Fundamentals',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        duration: '19:30',
        description: 'Create compelling drum patterns and rhythms',
        keyPoints: [
          'Kick, snare, and hi-hat patterns',
          'Programming realistic drums',
          'Using drum samples and synthesizers',
          'Adding groove and swing'
        ]
      },
      {
        title: 'Basslines and Low End',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        duration: '17:40',
        description: 'Craft powerful basslines that drive your track',
        keyPoints: [
          'Bass synth programming',
          'Relationship between bass and kick',
          'Sub bass techniques',
          'Common bassline patterns'
        ]
      },
      {
        title: 'Melody and Harmony',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
        duration: '16:55',
        description: 'Write memorable melodies and chord progressions',
        keyPoints: [
          'Scale and key selection',
          'Chord progression techniques',
          'Melody writing tips',
          'Layering harmonies'
        ]
      },
        {
        title: 'Sound Design Basics',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
        duration: '20:10',
        description: 'Create unique sounds using synthesizers',
        keyPoints: [
          'Oscillators, filters, and envelopes',
          'Subtractive synthesis',
          'FM and wavetable synthesis',
          'Creating custom patches'
        ]
      },
      {
        title: 'Mixing Fundamentals',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
        duration: '21:25',
        description: 'Balance all elements of your track professionally',
        keyPoints: [
          'Gain staging and levels',
          'Panning and stereo width',
          'EQ: cutting vs boosting',
          'Compression basics'
        ]
      },
      {
        title: 'Effects and Processing',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        duration: '19:50',
        description: 'Use reverb, delay, and other effects creatively',
        keyPoints: [
          'Reverb types and settings',
          'Delay and echo effects',
          'Modulation: chorus, flanger, phaser',
          'Distortion and saturation'
        ]
      },
      {
        title: 'Arrangement and Structure',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
        duration: '18:30',
        description: 'Build engaging song structures that keep listeners interested',
        keyPoints: [
          'Intro, verse, chorus, bridge',
          'Building energy and tension',
          'Transitions and fills',
          'Arrangement techniques by genre'
        ]
      },
      {
        title: 'Automation and Movement',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
        duration: '17:20',
        description: 'Add life to your mix with automation',
        keyPoints: [
          'Volume automation',
          'Filter sweeps',
          'Panning automation',
          'Effect parameter automation'
        ]
      },
      {
        title: 'Vocal Production',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        duration: '20:40',
        description: 'Record, edit, and process professional-sounding vocals',
        keyPoints: [
          'Vocal recording best practices',
          'Pitch correction and Auto-Tune',
          'Vocal EQ and compression',
          'Vocal effects and layering'
        ]
      },
      {
        title: 'Sampling and Chopping',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        duration: '19:15',
        description: 'Creative sampling techniques for unique productions',
        keyPoints: [
          'Finding and selecting samples',
          'Chopping and rearranging',
          'Time-stretching and pitch-shifting',
          'Legal considerations for sampling'
        ]
      },
      {
        title: 'Sidechain Compression',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        duration: '16:25',
        description: 'Create the pumping effect and ducking techniques',
        keyPoints: [
          'What is sidechaining',
          'Sidechain kick to bass',
          'Creative sidechaining',
          'Volume shaping alternatives'
        ]
      },
      {
        title: 'Parallel Processing',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        duration: '17:50',
        description: 'Advanced technique for adding power without losing dynamics',
        keyPoints: [
          'Parallel compression (New York style)',
          'Parallel distortion',
          'Parallel reverb',
          'Blending processed and dry signals'
        ]
      },
      {
        title: 'Reference Tracks',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        duration: '15:30',
        description: 'Use professional tracks to guide your production',
        keyPoints: [
          'Choosing appropriate reference tracks',
          'A/B comparison techniques',
          'Analyzing frequency balance',
          'Matching loudness levels'
        ]
      },
      {
        title: 'Pre-Mastering Preparation',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        duration: '18:40',
        description: 'Get your mix ready for the mastering stage',
        keyPoints: [
          'Checking for clipping and distortion',
          'Headroom and peak levels',
          'Bouncing and exporting',
          'File formats and sample rates'
        ]
      },
      {
        title: 'Basic Mastering',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
        duration: '20:20',
        description: 'Polish your track for distribution',
        keyPoints: [
          'Mastering EQ adjustments',
          'Multiband compression',
          'Limiting and loudness',
          'Dithering for different formats'
        ]
      },
      {
        title: 'Workflow and Productivity',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
        duration: '16:10',
        description: 'Finish more tracks with efficient production habits',
        keyPoints: [
          'Template creation',
          'Keyboard shortcuts',
          'Organizing your sample library',
          'Overcoming creative blocks'
        ]
      }
    ],
    quiz: {
      passingScore: 70,
      questions: [
        {
          question: 'What does DAW stand for?',
          options: [
            'Digital Audio Workshop',
            'Digital Audio Workstation',
            'Dynamic Audio Workspace',
            'Digital Analog Workstation'
          ],
          correctAnswer: 1,
          explanation: 'DAW stands for Digital Audio Workstation'
        },
        {
          question: 'What is the purpose of an audio interface?',
          options: [
            'To make music louder',
            'To convert analog signals to digital and vice versa',
            'To add effects to your music',
            'To store audio files'
          ],
          correctAnswer: 1,
          explanation: 'An audio interface converts analog signals to digital for recording and digital to analog for playback'
        },
        {
          question: 'What is sidechain compression commonly used for?',
          options: [
            'Making vocals louder',
            'Creating the pumping/ducking effect',
            'Adding reverb',
            'Tuning vocals'
          ],
          correctAnswer: 1,
          explanation: 'Sidechain compression creates the pumping effect, often used to duck bass when the kick hits'
        },
        {
          question: 'What is the recommended headroom before mastering?',
          options: [
            '0 dB',
            '-1 to -2 dB',
            '-3 to -6 dB',
            '-12 dB'
          ],
          correctAnswer: 2,
          explanation: 'Its recommended to leave -3 to -6 dB of headroom for the mastering engineer'
        },
        {
          question: 'What does MIDI stand for?',
          options: [
            'Musical Instrument Digital Interface',
            'Music Information Data Interface',
            'Modern Instrument Digital Input',
            'Musical Internet Data Interface'
          ],
          correctAnswer: 0,
          explanation: 'MIDI stands for Musical Instrument Digital Interface'
        }
      ]
    }
  }
};
