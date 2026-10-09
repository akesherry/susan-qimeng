/* 引导输出：51 个句型，每个展开 8 种变化。供查阅后跟她说。 */
const GUIDE = [
  {
    "n": 1,
    "phrase": "It's a",
    "lines": [
      {
        "kind": "肯定",
        "en": "It's a dog.",
        "zh": "它是一只狗。"
      },
      {
        "kind": "否定",
        "en": "It isn't a dog.",
        "zh": "它不是一只狗。"
      },
      {
        "kind": "疑问",
        "en": "Is it a dog?",
        "zh": "它是一只狗吗？"
      },
      {
        "kind": "问什么",
        "en": "What is it?",
        "zh": "它是什么？"
      },
      {
        "kind": "复数",
        "en": "They are dogs.",
        "zh": "它们是狗。"
      },
      {
        "kind": "复数否定",
        "en": "They aren't dogs.",
        "zh": "它们不是狗。"
      },
      {
        "kind": "复数疑问",
        "en": "Are they dogs?",
        "zh": "它们是狗吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What are they?",
        "zh": "它们是什么？"
      }
    ]
  },
  {
    "n": 2,
    "phrase": "This is",
    "lines": [
      {
        "kind": "肯定",
        "en": "This is a pen.",
        "zh": "这是一支钢笔。"
      },
      {
        "kind": "否定",
        "en": "This isn't a pen.",
        "zh": "这不是一支钢笔。"
      },
      {
        "kind": "疑问",
        "en": "Is this a pen?",
        "zh": "这是一支钢笔吗？"
      },
      {
        "kind": "问什么",
        "en": "What is this?",
        "zh": "这是什么？"
      },
      {
        "kind": "复数",
        "en": "These are pens.",
        "zh": "这些是钢笔。"
      },
      {
        "kind": "复数否定",
        "en": "These aren't pens.",
        "zh": "这些不是钢笔。"
      },
      {
        "kind": "复数疑问",
        "en": "Are these pens?",
        "zh": "这些是钢笔吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What are these?",
        "zh": "这些是什么？"
      }
    ]
  },
  {
    "n": 3,
    "phrase": "That is",
    "lines": [
      {
        "kind": "肯定",
        "en": "That is a tree.",
        "zh": "那是一棵树。"
      },
      {
        "kind": "否定",
        "en": "That isn't a tree.",
        "zh": "那不是一棵树。"
      },
      {
        "kind": "疑问",
        "en": "Is that a tree?",
        "zh": "那是一棵树吗？"
      },
      {
        "kind": "问什么",
        "en": "What is that?",
        "zh": "那是什么？"
      },
      {
        "kind": "复数",
        "en": "Those are trees.",
        "zh": "那些是树。"
      },
      {
        "kind": "复数否定",
        "en": "Those aren't trees.",
        "zh": "那些不是树。"
      },
      {
        "kind": "复数疑问",
        "en": "Are those trees?",
        "zh": "那些是树吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What are those?",
        "zh": "那些是什么？"
      }
    ]
  },
  {
    "n": 4,
    "phrase": "What is red?",
    "lines": [
      {
        "kind": "肯定",
        "en": "The apple is red.",
        "zh": "这个苹果是红色的。"
      },
      {
        "kind": "否定",
        "en": "The apple isn't red.",
        "zh": "这个苹果不是红色的。"
      },
      {
        "kind": "疑问",
        "en": "Is the apple red?",
        "zh": "这个苹果是红色的吗？"
      },
      {
        "kind": "问什么",
        "en": "What is red?",
        "zh": "什么是红色的？"
      },
      {
        "kind": "复数",
        "en": "The apples are red.",
        "zh": "这些苹果是红色的。"
      },
      {
        "kind": "复数否定",
        "en": "The apples aren't red.",
        "zh": "这些苹果不是红色的。"
      },
      {
        "kind": "复数疑问",
        "en": "Are the apples red?",
        "zh": "这些苹果是红色的吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What are red?",
        "zh": "哪些是红色的？"
      }
    ]
  },
  {
    "n": 5,
    "phrase": "What is blue?",
    "lines": [
      {
        "kind": "肯定",
        "en": "The sky is blue.",
        "zh": "天空是蓝色的。"
      },
      {
        "kind": "否定",
        "en": "The sky isn't blue.",
        "zh": "天空不是蓝色的。"
      },
      {
        "kind": "疑问",
        "en": "Is the sky blue?",
        "zh": "天空是蓝色的吗？"
      },
      {
        "kind": "问什么",
        "en": "What is blue?",
        "zh": "什么是蓝色的？"
      },
      {
        "kind": "复数",
        "en": "The skies are blue.",
        "zh": "这些天空是蓝色的。"
      },
      {
        "kind": "复数否定",
        "en": "The skies aren't blue.",
        "zh": "这些天空不是蓝色的。"
      },
      {
        "kind": "复数疑问",
        "en": "Are the skies blue?",
        "zh": "这些天空是蓝色的吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What are blue?",
        "zh": "哪些是蓝色的？"
      }
    ]
  },
  {
    "n": 6,
    "phrase": "It's a yellow pear",
    "lines": [
      {
        "kind": "肯定",
        "en": "It's a yellow pear.",
        "zh": "它是一个黄色的梨。"
      },
      {
        "kind": "否定",
        "en": "It isn't a yellow pear.",
        "zh": "它不是一个黄色的梨。"
      },
      {
        "kind": "疑问",
        "en": "Is it a yellow pear?",
        "zh": "它是一个黄色的梨吗？"
      },
      {
        "kind": "问什么",
        "en": "What color is the pear?",
        "zh": "这个梨是什么颜色的？"
      },
      {
        "kind": "复数",
        "en": "They are yellow pears.",
        "zh": "它们是黄色的梨。"
      },
      {
        "kind": "复数否定",
        "en": "They aren't yellow pears.",
        "zh": "它们不是黄色的梨。"
      },
      {
        "kind": "复数疑问",
        "en": "Are they yellow pears?",
        "zh": "它们是黄色的梨吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What color are the pears?",
        "zh": "这些梨是什么颜色的？"
      }
    ]
  },
  {
    "n": 7,
    "phrase": "What is big?",
    "lines": [
      {
        "kind": "肯定",
        "en": "The elephant is big.",
        "zh": "这头大象是大的。"
      },
      {
        "kind": "否定",
        "en": "The elephant isn't big.",
        "zh": "这头大象不是大的。"
      },
      {
        "kind": "疑问",
        "en": "Is the elephant big?",
        "zh": "这头大象是大的吗？"
      },
      {
        "kind": "问什么",
        "en": "What is big?",
        "zh": "什么是大的？"
      },
      {
        "kind": "复数",
        "en": "The elephants are big.",
        "zh": "这些大象是大的。"
      },
      {
        "kind": "复数否定",
        "en": "The elephants aren't big.",
        "zh": "这些大象不是大的。"
      },
      {
        "kind": "复数疑问",
        "en": "Are the elephants big?",
        "zh": "这些大象是大的吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What are big?",
        "zh": "哪些是大的？"
      }
    ]
  },
  {
    "n": 8,
    "phrase": "What is small?",
    "lines": [
      {
        "kind": "肯定",
        "en": "The ant is small.",
        "zh": "这只蚂蚁是小的。"
      },
      {
        "kind": "否定",
        "en": "The ant isn't small.",
        "zh": "这只蚂蚁不是小的。"
      },
      {
        "kind": "疑问",
        "en": "Is the ant small?",
        "zh": "这只蚂蚁是小的吗？"
      },
      {
        "kind": "问什么",
        "en": "What is small?",
        "zh": "什么是小的？"
      },
      {
        "kind": "复数",
        "en": "The ants are small.",
        "zh": "这些蚂蚁是小的。"
      },
      {
        "kind": "复数否定",
        "en": "The ants aren't small.",
        "zh": "这些蚂蚁不是小的。"
      },
      {
        "kind": "复数疑问",
        "en": "Are the ants small?",
        "zh": "这些蚂蚁是小的吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What are small?",
        "zh": "哪些是小的？"
      }
    ]
  },
  {
    "n": 9,
    "phrase": "It isn't",
    "lines": [
      {
        "kind": "肯定",
        "en": "It is a ball.",
        "zh": "它是一个球。"
      },
      {
        "kind": "否定",
        "en": "It isn't a ball.",
        "zh": "它不是一个球。"
      },
      {
        "kind": "疑问",
        "en": "Is it a ball?",
        "zh": "它是一个球吗？"
      },
      {
        "kind": "问什么",
        "en": "What isn't it?",
        "zh": "它不是什么？"
      },
      {
        "kind": "复数",
        "en": "They are balls.",
        "zh": "它们是球。"
      },
      {
        "kind": "复数否定",
        "en": "They aren't balls.",
        "zh": "它们不是球。"
      },
      {
        "kind": "复数疑问",
        "en": "Are they balls?",
        "zh": "它们是球吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What aren't they?",
        "zh": "它们不是什么？"
      }
    ]
  },
  {
    "n": 10,
    "phrase": "I can see",
    "lines": [
      {
        "kind": "肯定",
        "en": "I can see a bird.",
        "zh": "我能看见一只鸟。"
      },
      {
        "kind": "否定",
        "en": "I can't see a bird.",
        "zh": "我看不见一只鸟。"
      },
      {
        "kind": "疑问",
        "en": "Can you see a bird?",
        "zh": "你能看见一只鸟吗？"
      },
      {
        "kind": "问什么",
        "en": "What can you see?",
        "zh": "你能看见什么？"
      },
      {
        "kind": "复数",
        "en": "We can see birds.",
        "zh": "我们能看见鸟。"
      },
      {
        "kind": "复数否定",
        "en": "We can't see birds.",
        "zh": "我们看不见鸟。"
      },
      {
        "kind": "复数疑问",
        "en": "Can you see birds?",
        "zh": "你们能看见鸟吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What can you see?",
        "zh": "你们能看见什么？"
      },
      {
        "kind": "换成他",
        "en": "He can see a bird.",
        "zh": "他能看见一只鸟。"
      },
      {
        "kind": "他·否定",
        "en": "He can't see a bird.",
        "zh": "他看不见一只鸟。"
      },
      {
        "kind": "他·疑问",
        "en": "Can he see a bird?",
        "zh": "他能看见一只鸟吗？"
      },
      {
        "kind": "他·问什么",
        "en": "What can he see?",
        "zh": "他能看见什么？"
      },
      {
        "kind": "他们",
        "en": "They can see birds.",
        "zh": "他们能看见鸟。"
      },
      {
        "kind": "他们否定",
        "en": "They can't see birds.",
        "zh": "他们看不见鸟。"
      },
      {
        "kind": "他们疑问",
        "en": "Can they see birds?",
        "zh": "他们能看见鸟吗？"
      },
      {
        "kind": "他们问什么",
        "en": "What can they see?",
        "zh": "他们能看见什么？"
      }
    ]
  },
  {
    "n": 11,
    "phrase": "I can see (many things)",
    "lines": [
      {
        "kind": "肯定",
        "en": "I can see many flowers.",
        "zh": "我能看见很多花。"
      },
      {
        "kind": "否定",
        "en": "I can't see many flowers.",
        "zh": "我看不见很多花。"
      },
      {
        "kind": "疑问",
        "en": "Can you see many flowers?",
        "zh": "你能看见很多花吗？"
      },
      {
        "kind": "问什么",
        "en": "How many flowers can you see?",
        "zh": "你能看见多少朵花？"
      },
      {
        "kind": "复数",
        "en": "We can see many flowers.",
        "zh": "我们能看见很多花。"
      },
      {
        "kind": "复数否定",
        "en": "We can't see many flowers.",
        "zh": "我们看不见很多花。"
      },
      {
        "kind": "复数疑问",
        "en": "Can you see many flowers?",
        "zh": "你们能看见很多花吗？"
      },
      {
        "kind": "复数问什么",
        "en": "How many flowers can you see?",
        "zh": "你们能看见多少朵花？"
      }
    ]
  },
  {
    "n": 12,
    "phrase": "It's my",
    "lines": [
      {
        "kind": "肯定",
        "en": "It's my notebook.",
        "zh": "它是我的笔记本。"
      },
      {
        "kind": "否定",
        "en": "It isn't my notebook.",
        "zh": "它不是我的笔记本。"
      },
      {
        "kind": "疑问",
        "en": "Is it your notebook?",
        "zh": "它是你的笔记本吗？"
      },
      {
        "kind": "问什么",
        "en": "Whose notebook is it?",
        "zh": "它是谁的笔记本？"
      },
      {
        "kind": "复数",
        "en": "They are our notebooks.",
        "zh": "它们是我们的笔记本。"
      },
      {
        "kind": "复数否定",
        "en": "They aren't our notebooks.",
        "zh": "它们不是我们的笔记本。"
      },
      {
        "kind": "复数疑问",
        "en": "Are they your notebooks?",
        "zh": "它们是你们的笔记本吗？"
      },
      {
        "kind": "复数问什么",
        "en": "Whose notebooks are they?",
        "zh": "它们是谁的笔记本？"
      }
    ]
  },
  {
    "n": 13,
    "phrase": "She is",
    "lines": [
      {
        "kind": "肯定",
        "en": "She is a teacher.",
        "zh": "她是一名老师。"
      },
      {
        "kind": "否定",
        "en": "She isn't a teacher.",
        "zh": "她不是一名老师。"
      },
      {
        "kind": "疑问",
        "en": "Is she a teacher?",
        "zh": "她是一名老师吗？"
      },
      {
        "kind": "问什么",
        "en": "What is she?",
        "zh": "她是做什么的？"
      },
      {
        "kind": "复数",
        "en": "They are teachers.",
        "zh": "她们是老师。"
      },
      {
        "kind": "复数否定",
        "en": "They aren't teachers.",
        "zh": "她们不是老师。"
      },
      {
        "kind": "复数疑问",
        "en": "Are they teachers?",
        "zh": "她们是老师吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What are they?",
        "zh": "她们是做什么的？"
      }
    ]
  },
  {
    "n": 14,
    "phrase": "It isn't mine",
    "lines": [
      {
        "kind": "肯定",
        "en": "It is mine (the pencil).",
        "zh": "这支铅笔是我的。"
      },
      {
        "kind": "否定",
        "en": "It isn't mine (the pencil).",
        "zh": "这支铅笔不是我的。"
      },
      {
        "kind": "疑问",
        "en": "Is it yours (the pencil)?",
        "zh": "这支铅笔是你的吗？"
      },
      {
        "kind": "问什么",
        "en": "Whose pencil is it?",
        "zh": "这支铅笔是谁的？"
      },
      {
        "kind": "复数",
        "en": "They are ours (the pencils).",
        "zh": "这些铅笔是我们的。"
      },
      {
        "kind": "复数否定",
        "en": "They aren't ours (the pencils).",
        "zh": "这些铅笔不是我们的。"
      },
      {
        "kind": "复数疑问",
        "en": "Are they yours (the pencils)?",
        "zh": "这些铅笔是你们的吗？"
      },
      {
        "kind": "复数问什么",
        "en": "Whose pencils are they?",
        "zh": "这些铅笔是谁的？"
      }
    ]
  },
  {
    "n": 15,
    "phrase": "My mom's",
    "lines": [
      {
        "kind": "肯定",
        "en": "This is my mom's umbrella.",
        "zh": "这是我妈妈的雨伞。"
      },
      {
        "kind": "否定",
        "en": "This isn't my mom's umbrella.",
        "zh": "这不是我妈妈的雨伞。"
      },
      {
        "kind": "疑问",
        "en": "Is this your mom's umbrella?",
        "zh": "这是你妈妈的雨伞吗？"
      },
      {
        "kind": "问什么",
        "en": "Whose umbrella is this?",
        "zh": "这是谁的雨伞？"
      },
      {
        "kind": "复数",
        "en": "These are my mom's umbrellas.",
        "zh": "这些是我妈妈的雨伞。"
      },
      {
        "kind": "复数否定",
        "en": "These aren't my mom's umbrellas.",
        "zh": "这些不是我妈妈的雨伞。"
      },
      {
        "kind": "复数疑问",
        "en": "Are these your mom's umbrellas?",
        "zh": "这些是你妈妈的雨伞吗？"
      },
      {
        "kind": "复数问什么",
        "en": "Whose umbrellas are these?",
        "zh": "这些是谁的雨伞？"
      }
    ]
  },
  {
    "n": 16,
    "phrase": "There is",
    "lines": [
      {
        "kind": "肯定",
        "en": "There is a cup on the desk.",
        "zh": "桌子上有一个杯子。"
      },
      {
        "kind": "否定",
        "en": "There isn't a cup on the desk.",
        "zh": "桌子上没有一个杯子。"
      },
      {
        "kind": "疑问",
        "en": "Is there a cup on the desk?",
        "zh": "桌子上有一个杯子吗？"
      },
      {
        "kind": "问什么",
        "en": "What is there on the desk?",
        "zh": "桌子上有什么？"
      },
      {
        "kind": "复数",
        "en": "There are cups on the desk.",
        "zh": "桌子上有杯子。"
      },
      {
        "kind": "复数否定",
        "en": "There aren't cups on the desk.",
        "zh": "桌子上没有杯子。"
      },
      {
        "kind": "复数疑问",
        "en": "Are there cups on the desk?",
        "zh": "桌子上有杯子吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What are there on the desk?",
        "zh": "桌子上有什么？"
      }
    ]
  },
  {
    "n": 17,
    "phrase": "What's in the sea?",
    "lines": [
      {
        "kind": "肯定",
        "en": "There are fish in the sea.",
        "zh": "海里有鱼。"
      },
      {
        "kind": "否定",
        "en": "There aren't fish in the sea.",
        "zh": "海里没有鱼。"
      },
      {
        "kind": "疑问",
        "en": "Are there fish in the sea?",
        "zh": "海里有鱼吗？"
      },
      {
        "kind": "问什么",
        "en": "What's in the sea?",
        "zh": "海里有什么？"
      },
      {
        "kind": "复数",
        "en": "There are many fish in the sea.",
        "zh": "海里有很多鱼。"
      },
      {
        "kind": "复数否定",
        "en": "There aren't many fish in the sea.",
        "zh": "海里没有很多鱼。"
      },
      {
        "kind": "复数疑问",
        "en": "Are there many fish in the sea?",
        "zh": "海里有很多鱼吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What are in the sea?",
        "zh": "海里有哪些东西？"
      }
    ]
  },
  {
    "n": 18,
    "phrase": "What's on the grass?",
    "lines": [
      {
        "kind": "肯定",
        "en": "There is a butterfly on the grass.",
        "zh": "草地上有一只蝴蝶。"
      },
      {
        "kind": "否定",
        "en": "There isn't a butterfly on the grass.",
        "zh": "草地上没有一只蝴蝶。"
      },
      {
        "kind": "疑问",
        "en": "Is there a butterfly on the grass?",
        "zh": "草地上有一只蝴蝶吗？"
      },
      {
        "kind": "问什么",
        "en": "What's on the grass?",
        "zh": "草地上有什么？"
      },
      {
        "kind": "复数",
        "en": "There are butterflies on the grass.",
        "zh": "草地上有蝴蝶。"
      },
      {
        "kind": "复数否定",
        "en": "There aren't butterflies on the grass.",
        "zh": "草地上没有蝴蝶。"
      },
      {
        "kind": "复数疑问",
        "en": "Are there butterflies on the grass?",
        "zh": "草地上有蝴蝶吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What are on the grass?",
        "zh": "草地上有哪些东西？"
      }
    ]
  },
  {
    "n": 19,
    "phrase": "I can't see",
    "lines": [
      {
        "kind": "肯定",
        "en": "I can see stars.",
        "zh": "我能看见星星。"
      },
      {
        "kind": "否定",
        "en": "I can't see stars.",
        "zh": "我看不见星星。"
      },
      {
        "kind": "疑问",
        "en": "Can you see stars?",
        "zh": "你能看见星星吗？"
      },
      {
        "kind": "问什么",
        "en": "What can't you see?",
        "zh": "你看不见什么？"
      },
      {
        "kind": "复数",
        "en": "We can see stars.",
        "zh": "我们能看见星星。"
      },
      {
        "kind": "复数否定",
        "en": "We can't see stars.",
        "zh": "我们看不见星星。"
      },
      {
        "kind": "复数疑问",
        "en": "Can you see stars?",
        "zh": "你们能看见星星吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What can't you see?",
        "zh": "你们看不见什么？"
      }
    ]
  },
  {
    "n": 20,
    "phrase": "I have",
    "lines": [
      {
        "kind": "肯定",
        "en": "I have a bag.",
        "zh": "我有一个包。"
      },
      {
        "kind": "否定",
        "en": "I don't have a bag.",
        "zh": "我没有一个包。"
      },
      {
        "kind": "疑问",
        "en": "Do you have a bag?",
        "zh": "你有一个包吗？"
      },
      {
        "kind": "问什么",
        "en": "What do you have?",
        "zh": "你有什么？"
      },
      {
        "kind": "复数",
        "en": "We have bags.",
        "zh": "我们有包。"
      },
      {
        "kind": "复数否定",
        "en": "We don't have bags.",
        "zh": "我们没有包。"
      },
      {
        "kind": "复数疑问",
        "en": "Do you have bags?",
        "zh": "你们有包吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What do you have?",
        "zh": "你们有什么？"
      }
    ]
  },
  {
    "n": 21,
    "phrase": "I don't have",
    "lines": [
      {
        "kind": "肯定",
        "en": "I have an eraser.",
        "zh": "我有一块橡皮。"
      },
      {
        "kind": "否定",
        "en": "I don't have an eraser.",
        "zh": "我没有一块橡皮。"
      },
      {
        "kind": "疑问",
        "en": "Do you have an eraser?",
        "zh": "你有一块橡皮吗？"
      },
      {
        "kind": "问什么",
        "en": "What don't you have?",
        "zh": "你没有什么？"
      },
      {
        "kind": "复数",
        "en": "We have erasers.",
        "zh": "我们有橡皮。"
      },
      {
        "kind": "复数否定",
        "en": "We don't have erasers.",
        "zh": "我们没有橡皮。"
      },
      {
        "kind": "复数疑问",
        "en": "Do you have erasers?",
        "zh": "你们有橡皮吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What don't you have?",
        "zh": "你们没有什么？"
      }
    ]
  },
  {
    "n": 22,
    "phrase": "My dad has",
    "lines": [
      {
        "kind": "肯定",
        "en": "My dad has a car.",
        "zh": "我爸爸有一辆车。"
      },
      {
        "kind": "否定",
        "en": "My dad doesn't have a car.",
        "zh": "我爸爸没有一辆车。"
      },
      {
        "kind": "疑问",
        "en": "Does your dad have a car?",
        "zh": "你爸爸有一辆车吗？"
      },
      {
        "kind": "问什么",
        "en": "What does your dad have?",
        "zh": "你爸爸有什么？"
      },
      {
        "kind": "复数",
        "en": "Our dads have cars.",
        "zh": "我们的爸爸们有车。"
      },
      {
        "kind": "复数否定",
        "en": "Our dads don't have cars.",
        "zh": "我们的爸爸们没有车。"
      },
      {
        "kind": "复数疑问",
        "en": "Do your dads have cars?",
        "zh": "你们的爸爸们有车吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What do your dads have?",
        "zh": "你们的爸爸们有什么？"
      }
    ]
  },
  {
    "n": 23,
    "phrase": "My dad doesn't have",
    "lines": [
      {
        "kind": "肯定",
        "en": "My dad has a laptop.",
        "zh": "我爸爸有一台笔记本电脑。"
      },
      {
        "kind": "否定",
        "en": "My dad doesn't have a laptop.",
        "zh": "我爸爸没有一台笔记本电脑。"
      },
      {
        "kind": "疑问",
        "en": "Does your dad have a laptop?",
        "zh": "你爸爸有一台笔记本电脑吗？"
      },
      {
        "kind": "问什么",
        "en": "What doesn't your dad have?",
        "zh": "你爸爸没有什么？"
      },
      {
        "kind": "复数",
        "en": "Our dads have laptops.",
        "zh": "我们的爸爸们有笔记本电脑。"
      },
      {
        "kind": "复数否定",
        "en": "Our dads don't have laptops.",
        "zh": "我们的爸爸们没有笔记本电脑。"
      },
      {
        "kind": "复数疑问",
        "en": "Do your dads have laptops?",
        "zh": "你们的爸爸们有笔记本电脑吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What don't your dads have?",
        "zh": "你们的爸爸们没有什么？"
      }
    ]
  },
  {
    "n": 24,
    "phrase": "I like",
    "lines": [
      {
        "kind": "肯定",
        "en": "I like ice cream.",
        "zh": "我喜欢冰淇淋。"
      },
      {
        "kind": "否定",
        "en": "I don't like ice cream.",
        "zh": "我不喜欢冰淇淋。"
      },
      {
        "kind": "疑问",
        "en": "Do you like ice cream?",
        "zh": "你喜欢冰淇淋吗？"
      },
      {
        "kind": "问什么",
        "en": "What do you like?",
        "zh": "你喜欢什么？"
      },
      {
        "kind": "复数",
        "en": "We like ice cream.",
        "zh": "我们喜欢冰淇淋。"
      },
      {
        "kind": "复数否定",
        "en": "We don't like ice cream.",
        "zh": "我们不喜欢冰淇淋。"
      },
      {
        "kind": "复数疑问",
        "en": "Do you like ice cream?",
        "zh": "你们喜欢冰淇淋吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What do you like?",
        "zh": "你们喜欢什么？"
      }
    ]
  },
  {
    "n": 25,
    "phrase": "I don't like",
    "lines": [
      {
        "kind": "肯定",
        "en": "I like onions.",
        "zh": "我喜欢洋葱。"
      },
      {
        "kind": "否定",
        "en": "I don't like onions.",
        "zh": "我不喜欢洋葱。"
      },
      {
        "kind": "疑问",
        "en": "Do you like onions?",
        "zh": "你喜欢洋葱吗？"
      },
      {
        "kind": "问什么",
        "en": "What don't you like?",
        "zh": "你不喜欢什么？"
      },
      {
        "kind": "复数",
        "en": "We like onions.",
        "zh": "我们喜欢洋葱。"
      },
      {
        "kind": "复数否定",
        "en": "We don't like onions.",
        "zh": "我们不喜欢洋葱。"
      },
      {
        "kind": "复数疑问",
        "en": "Do you like onions?",
        "zh": "你们喜欢洋葱吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What don't you like?",
        "zh": "你们不喜欢什么？"
      }
    ]
  },
  {
    "n": 26,
    "phrase": "The lion likes",
    "lines": [
      {
        "kind": "肯定",
        "en": "The lion likes meat.",
        "zh": "这只狮子喜欢吃肉。"
      },
      {
        "kind": "否定",
        "en": "The lion doesn't like meat.",
        "zh": "这只狮子不喜欢吃肉。"
      },
      {
        "kind": "疑问",
        "en": "Does the lion like meat?",
        "zh": "这只狮子喜欢吃肉吗？"
      },
      {
        "kind": "问什么",
        "en": "What does the lion like?",
        "zh": "这只狮子喜欢什么？"
      },
      {
        "kind": "复数",
        "en": "The lions like meat.",
        "zh": "这些狮子喜欢吃肉。"
      },
      {
        "kind": "复数否定",
        "en": "The lions don't like meat.",
        "zh": "这些狮子不喜欢吃肉。"
      },
      {
        "kind": "复数疑问",
        "en": "Do the lions like meat?",
        "zh": "这些狮子喜欢吃肉吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What do the lions like?",
        "zh": "这些狮子喜欢什么？"
      }
    ]
  },
  {
    "n": 27,
    "phrase": "doesn't like",
    "lines": [
      {
        "kind": "肯定",
        "en": "The cat likes fish.",
        "zh": "这只猫喜欢鱼。"
      },
      {
        "kind": "否定",
        "en": "The cat doesn't like fish.",
        "zh": "这只猫不喜欢鱼。"
      },
      {
        "kind": "疑问",
        "en": "Does the cat like fish?",
        "zh": "这只猫喜欢鱼吗？"
      },
      {
        "kind": "问什么",
        "en": "What doesn't the cat like?",
        "zh": "这只猫不喜欢什么？"
      },
      {
        "kind": "复数",
        "en": "The cats like fish.",
        "zh": "这些猫喜欢鱼。"
      },
      {
        "kind": "复数否定",
        "en": "The cats don't like fish.",
        "zh": "这些猫不喜欢鱼。"
      },
      {
        "kind": "复数疑问",
        "en": "Do the cats like fish?",
        "zh": "这些猫喜欢鱼吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What don't the cats like?",
        "zh": "这些猫不喜欢什么？"
      }
    ]
  },
  {
    "n": 28,
    "phrase": "I love",
    "lines": [
      {
        "kind": "肯定",
        "en": "I love my family.",
        "zh": "我爱我的家人。"
      },
      {
        "kind": "否定",
        "en": "I don't love my family.",
        "zh": "我不爱我的家人。"
      },
      {
        "kind": "疑问",
        "en": "Do you love your family?",
        "zh": "你爱你的家人吗？"
      },
      {
        "kind": "问什么",
        "en": "Who do you love?",
        "zh": "你爱谁？"
      },
      {
        "kind": "复数",
        "en": "We love our families.",
        "zh": "我们爱我们的家人。"
      },
      {
        "kind": "复数否定",
        "en": "We don't love our families.",
        "zh": "我们不爱我们的家人。"
      },
      {
        "kind": "复数疑问",
        "en": "Do you love your families?",
        "zh": "你们爱你们的家人吗？"
      },
      {
        "kind": "复数问什么",
        "en": "Who do you love?",
        "zh": "你们爱谁？"
      }
    ]
  },
  {
    "n": 29,
    "phrase": "I hate",
    "lines": [
      {
        "kind": "肯定",
        "en": "I hate spiders.",
        "zh": "我讨厌蜘蛛。"
      },
      {
        "kind": "否定",
        "en": "I don't hate spiders.",
        "zh": "我不讨厌蜘蛛。"
      },
      {
        "kind": "疑问",
        "en": "Do you hate spiders?",
        "zh": "你讨厌蜘蛛吗？"
      },
      {
        "kind": "问什么",
        "en": "What do you hate?",
        "zh": "你讨厌什么？"
      },
      {
        "kind": "复数",
        "en": "We hate spiders.",
        "zh": "我们讨厌蜘蛛。"
      },
      {
        "kind": "复数否定",
        "en": "We don't hate spiders.",
        "zh": "我们不讨厌蜘蛛。"
      },
      {
        "kind": "复数疑问",
        "en": "Do you hate spiders?",
        "zh": "你们讨厌蜘蛛吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What do you hate?",
        "zh": "你们讨厌什么？"
      }
    ]
  },
  {
    "n": 30,
    "phrase": "Grandpa loves",
    "lines": [
      {
        "kind": "肯定",
        "en": "Grandpa loves gardening.",
        "zh": "爷爷喜欢园艺。"
      },
      {
        "kind": "否定",
        "en": "Grandpa doesn't love gardening.",
        "zh": "爷爷不喜欢园艺。"
      },
      {
        "kind": "疑问",
        "en": "Does Grandpa love gardening?",
        "zh": "爷爷喜欢园艺吗？"
      },
      {
        "kind": "问什么",
        "en": "What does Grandpa love?",
        "zh": "爷爷喜欢什么？"
      },
      {
        "kind": "复数",
        "en": "Grandpas love gardening.",
        "zh": "爷爷们喜欢园艺。"
      },
      {
        "kind": "复数否定",
        "en": "Grandpas don't love gardening.",
        "zh": "爷爷们不喜欢园艺。"
      },
      {
        "kind": "复数疑问",
        "en": "Do Grandpas love gardening?",
        "zh": "爷爷们喜欢园艺吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What do Grandpas love?",
        "zh": "爷爷们喜欢什么？"
      }
    ]
  },
  {
    "n": 31,
    "phrase": "Grandma hates",
    "lines": [
      {
        "kind": "肯定",
        "en": "Grandma hates noise.",
        "zh": "奶奶讨厌噪音。"
      },
      {
        "kind": "否定",
        "en": "Grandma doesn't hate noise.",
        "zh": "奶奶不讨厌噪音。"
      },
      {
        "kind": "疑问",
        "en": "Does Grandma hate noise?",
        "zh": "奶奶讨厌噪音吗？"
      },
      {
        "kind": "问什么",
        "en": "What does Grandma hate?",
        "zh": "奶奶讨厌什么？"
      },
      {
        "kind": "复数",
        "en": "Grandmas hate noise.",
        "zh": "奶奶们讨厌噪音。"
      },
      {
        "kind": "复数否定",
        "en": "Grandmas don't hate noise.",
        "zh": "奶奶们不讨厌噪音。"
      },
      {
        "kind": "复数疑问",
        "en": "Do Grandmas hate noise?",
        "zh": "奶奶们讨厌噪音吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What do Grandmas hate?",
        "zh": "奶奶们讨厌什么？"
      }
    ]
  },
  {
    "n": 32,
    "phrase": "I want",
    "lines": [
      {
        "kind": "肯定",
        "en": "I want a toy bear.",
        "zh": "我想要一只玩具熊。"
      },
      {
        "kind": "否定",
        "en": "I don't want a toy bear.",
        "zh": "我不想要一只玩具熊。"
      },
      {
        "kind": "疑问",
        "en": "Do you want a toy bear?",
        "zh": "你想要一只玩具熊吗？"
      },
      {
        "kind": "问什么",
        "en": "What do you want?",
        "zh": "你想要什么？"
      },
      {
        "kind": "复数",
        "en": "We want toy bears.",
        "zh": "我们想要玩具熊。"
      },
      {
        "kind": "复数否定",
        "en": "We don't want toy bears.",
        "zh": "我们不想要玩具熊。"
      },
      {
        "kind": "复数疑问",
        "en": "Do you want toy bears?",
        "zh": "你们想要玩具熊吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What do you want?",
        "zh": "你们想要什么？"
      }
    ]
  },
  {
    "n": 33,
    "phrase": "I don't want",
    "lines": [
      {
        "kind": "肯定",
        "en": "I want this shirt.",
        "zh": "我想要这件衬衫。"
      },
      {
        "kind": "否定",
        "en": "I don't want this shirt.",
        "zh": "我不想要这件衬衫。"
      },
      {
        "kind": "疑问",
        "en": "Do you want this shirt?",
        "zh": "你想要这件衬衫吗？"
      },
      {
        "kind": "问什么",
        "en": "What don't you want?",
        "zh": "你不想要什么？"
      },
      {
        "kind": "复数",
        "en": "We want these shirts.",
        "zh": "我们想要这些衬衫。"
      },
      {
        "kind": "复数否定",
        "en": "We don't want these shirts.",
        "zh": "我们不想要这些衬衫。"
      },
      {
        "kind": "复数疑问",
        "en": "Do you want these shirts?",
        "zh": "你们想要这些衬衫吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What don't you want?",
        "zh": "你们不想要什么？"
      }
    ]
  },
  {
    "n": 34,
    "phrase": "The cow wants",
    "lines": [
      {
        "kind": "肯定",
        "en": "The cow wants grass.",
        "zh": "这头奶牛想要吃草。"
      },
      {
        "kind": "否定",
        "en": "The cow doesn't want grass.",
        "zh": "这头奶牛不想要吃草。"
      },
      {
        "kind": "疑问",
        "en": "Does the cow want grass?",
        "zh": "这头奶牛想要吃草吗？"
      },
      {
        "kind": "问什么",
        "en": "What does the cow want?",
        "zh": "这头奶牛想要什么？"
      },
      {
        "kind": "复数",
        "en": "The cows want grass.",
        "zh": "这些奶牛想要吃草。"
      },
      {
        "kind": "复数否定",
        "en": "The cows don't want grass.",
        "zh": "这些奶牛不想要吃草。"
      },
      {
        "kind": "复数疑问",
        "en": "Do the cows want grass?",
        "zh": "这些奶牛想要吃草吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What do the cows want?",
        "zh": "这些奶牛想要什么？"
      }
    ]
  },
  {
    "n": 35,
    "phrase": "Mr bull doesn't want",
    "lines": [
      {
        "kind": "肯定",
        "en": "Mr bull wants water.",
        "zh": "公牛先生想要喝水。"
      },
      {
        "kind": "否定",
        "en": "Mr bull doesn't want water.",
        "zh": "公牛先生不想要喝水。"
      },
      {
        "kind": "疑问",
        "en": "Does Mr bull want water?",
        "zh": "公牛先生想要喝水吗？"
      },
      {
        "kind": "问什么",
        "en": "What doesn't Mr bull want?",
        "zh": "公牛先生不想要什么？"
      },
      {
        "kind": "复数",
        "en": "Mr bulls want water.",
        "zh": "公牛先生们想要喝水。"
      },
      {
        "kind": "复数否定",
        "en": "Mr bulls don't want water.",
        "zh": "公牛先生们不想要喝水。"
      },
      {
        "kind": "复数疑问",
        "en": "Do Mr bulls want water?",
        "zh": "公牛先生们想要喝水吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What don't Mr bulls want?",
        "zh": "公牛先生们不想要什么？"
      }
    ]
  },
  {
    "n": 36,
    "phrase": "Can I have",
    "lines": [
      {
        "kind": "肯定",
        "en": "I can have a glass of juice.",
        "zh": "我能要一杯果汁。"
      },
      {
        "kind": "否定",
        "en": "I can't have a glass of juice.",
        "zh": "我不能要一杯果汁。"
      },
      {
        "kind": "疑问",
        "en": "Can I have a glass of juice?",
        "zh": "我能要一杯果汁吗？"
      },
      {
        "kind": "问什么",
        "en": "What can I have?",
        "zh": "我能要什么？"
      },
      {
        "kind": "复数",
        "en": "We can have some glasses of juice.",
        "zh": "我们能要几杯果汁。"
      },
      {
        "kind": "复数否定",
        "en": "We can't have some glasses of juice.",
        "zh": "我们不能要几杯果汁。"
      },
      {
        "kind": "复数疑问",
        "en": "Can we have some glasses of juice?",
        "zh": "我们能要几杯果汁吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What can we have?",
        "zh": "我们能要什么？"
      }
    ]
  },
  {
    "n": 37,
    "phrase": "I want to eat",
    "lines": [
      {
        "kind": "肯定",
        "en": "I want to eat noodles.",
        "zh": "我想要吃面条。"
      },
      {
        "kind": "否定",
        "en": "I don't want to eat noodles.",
        "zh": "我不想要吃面条。"
      },
      {
        "kind": "疑问",
        "en": "Do you want to eat noodles?",
        "zh": "你想要吃面条吗？"
      },
      {
        "kind": "问什么",
        "en": "What do you want to eat?",
        "zh": "你想要吃什么？"
      },
      {
        "kind": "复数",
        "en": "We want to eat noodles.",
        "zh": "我们想要吃面条。"
      },
      {
        "kind": "复数否定",
        "en": "We don't want to eat noodles.",
        "zh": "我们不想要吃面条。"
      },
      {
        "kind": "复数疑问",
        "en": "Do you want to eat noodles?",
        "zh": "你们想要吃面条吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What do you want to eat?",
        "zh": "你们想要吃什么？"
      }
    ]
  },
  {
    "n": 38,
    "phrase": "I am wearing",
    "lines": [
      {
        "kind": "肯定",
        "en": "I am wearing a dress.",
        "zh": "我正穿着一条连衣裙。"
      },
      {
        "kind": "否定",
        "en": "I am not wearing a dress.",
        "zh": "我没穿着一条连衣裙。"
      },
      {
        "kind": "疑问",
        "en": "Are you wearing a dress?",
        "zh": "你正穿着一条连衣裙吗？"
      },
      {
        "kind": "问什么",
        "en": "What are you wearing?",
        "zh": "你正穿着什么？"
      },
      {
        "kind": "复数",
        "en": "We are wearing dresses.",
        "zh": "我们正穿着连衣裙。"
      },
      {
        "kind": "复数否定",
        "en": "We are not wearing dresses.",
        "zh": "我们没穿着连衣裙。"
      },
      {
        "kind": "复数疑问",
        "en": "Are you wearing dresses?",
        "zh": "你们正穿着连衣裙吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What are you wearing?",
        "zh": "你们正穿着什么？"
      }
    ]
  },
  {
    "n": 39,
    "phrase": "He is wearing",
    "lines": [
      {
        "kind": "肯定",
        "en": "He is wearing a sweater.",
        "zh": "他正穿着一件毛衣。"
      },
      {
        "kind": "否定",
        "en": "He isn't wearing a sweater.",
        "zh": "他没穿着一件毛衣。"
      },
      {
        "kind": "疑问",
        "en": "Is he wearing a sweater?",
        "zh": "他正穿着一件毛衣吗？"
      },
      {
        "kind": "问什么",
        "en": "What is he wearing?",
        "zh": "他正穿着什么？"
      },
      {
        "kind": "复数",
        "en": "They are wearing sweaters.",
        "zh": "他们正穿着毛衣。"
      },
      {
        "kind": "复数否定",
        "en": "They aren't wearing sweaters.",
        "zh": "他们没穿着毛衣。"
      },
      {
        "kind": "复数疑问",
        "en": "Are they wearing sweaters?",
        "zh": "他们正穿着毛衣吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What are they wearing?",
        "zh": "他们正穿着什么？"
      }
    ]
  },
  {
    "n": 40,
    "phrase": "A cat doesn't eat",
    "lines": [
      {
        "kind": "肯定",
        "en": "A cat eats fish.",
        "zh": "猫吃鱼。"
      },
      {
        "kind": "否定",
        "en": "A cat doesn't eat bones.",
        "zh": "猫不吃骨头。"
      },
      {
        "kind": "疑问",
        "en": "Does a cat eat bones?",
        "zh": "猫吃骨头吗？"
      },
      {
        "kind": "问什么",
        "en": "What doesn't a cat eat?",
        "zh": "猫不吃什么？"
      },
      {
        "kind": "复数",
        "en": "Cats eat fish.",
        "zh": "猫吃鱼。"
      },
      {
        "kind": "复数否定",
        "en": "Cats don't eat bones.",
        "zh": "猫不吃骨头。"
      },
      {
        "kind": "复数疑问",
        "en": "Do cats eat bones?",
        "zh": "猫吃骨头吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What don't cats eat?",
        "zh": "猫不吃什么？"
      }
    ]
  },
  {
    "n": 41,
    "phrase": "I can drink",
    "lines": [
      {
        "kind": "肯定",
        "en": "I can drink milk.",
        "zh": "我能喝牛奶。"
      },
      {
        "kind": "否定",
        "en": "I can't drink milk.",
        "zh": "我不能喝牛奶。"
      },
      {
        "kind": "疑问",
        "en": "Can you drink milk?",
        "zh": "你能喝牛奶吗？"
      },
      {
        "kind": "问什么",
        "en": "What can you drink?",
        "zh": "你能喝什么？"
      },
      {
        "kind": "复数",
        "en": "We can drink milk.",
        "zh": "我们能喝牛奶。"
      },
      {
        "kind": "复数否定",
        "en": "We can't drink milk.",
        "zh": "我们不能喝牛奶。"
      },
      {
        "kind": "复数疑问",
        "en": "Can you drink milk?",
        "zh": "你们能喝牛奶吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What can you drink?",
        "zh": "你们能喝什么？"
      }
    ]
  },
  {
    "n": 42,
    "phrase": "Look at",
    "lines": [
      {
        "kind": "肯定",
        "en": "I look at the blackboard.",
        "zh": "我看着黑板。"
      },
      {
        "kind": "否定",
        "en": "I don't look at the blackboard.",
        "zh": "我不看黑板。"
      },
      {
        "kind": "疑问",
        "en": "Do you look at the blackboard?",
        "zh": "你看着黑板吗？"
      },
      {
        "kind": "问什么",
        "en": "What do you look at?",
        "zh": "你看着什么？"
      },
      {
        "kind": "复数",
        "en": "We look at the blackboards.",
        "zh": "我们看着黑板。"
      },
      {
        "kind": "复数否定",
        "en": "We don't look at the blackboards.",
        "zh": "我们不看黑板。"
      },
      {
        "kind": "复数疑问",
        "en": "Do you look at the blackboards?",
        "zh": "你们看着黑板吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What do you look at?",
        "zh": "你们看着什么？"
      }
    ]
  },
  {
    "n": 43,
    "phrase": "Listen to",
    "lines": [
      {
        "kind": "肯定",
        "en": "I listen to music.",
        "zh": "我听音乐。"
      },
      {
        "kind": "否定",
        "en": "I don't listen to music.",
        "zh": "我不听音乐。"
      },
      {
        "kind": "疑问",
        "en": "Do you listen to music?",
        "zh": "你听音乐吗？"
      },
      {
        "kind": "问什么",
        "en": "What do you listen to?",
        "zh": "你听什么？"
      },
      {
        "kind": "复数",
        "en": "We listen to music.",
        "zh": "我们听音乐。"
      },
      {
        "kind": "复数否定",
        "en": "We don't listen to music.",
        "zh": "我们不听音乐。"
      },
      {
        "kind": "复数疑问",
        "en": "Do you listen to music?",
        "zh": "你们听音乐吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What do you listen to?",
        "zh": "你们听什么？"
      }
    ]
  },
  {
    "n": 44,
    "phrase": "I can hear",
    "lines": [
      {
        "kind": "肯定",
        "en": "I can hear a bird.",
        "zh": "我能听到一只鸟的叫声。"
      },
      {
        "kind": "否定",
        "en": "I can't hear a bird.",
        "zh": "我听不到一只鸟的叫声。"
      },
      {
        "kind": "疑问",
        "en": "Can you hear a bird?",
        "zh": "你能听到一只鸟的叫声吗？"
      },
      {
        "kind": "问什么",
        "en": "What can you hear?",
        "zh": "你能听到什么？"
      },
      {
        "kind": "复数",
        "en": "We can hear birds.",
        "zh": "我们能听到鸟的叫声。"
      },
      {
        "kind": "复数否定",
        "en": "We can't hear birds.",
        "zh": "我们听不到鸟的叫声。"
      },
      {
        "kind": "复数疑问",
        "en": "Can you hear birds?",
        "zh": "你们能听到鸟的叫声吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What can you hear?",
        "zh": "你们能听到什么？"
      }
    ]
  },
  {
    "n": 45,
    "phrase": "It's hot",
    "lines": [
      {
        "kind": "肯定",
        "en": "It's hot today.",
        "zh": "今天天气很热。"
      },
      {
        "kind": "否定",
        "en": "It isn't hot today.",
        "zh": "今天天气不热。"
      },
      {
        "kind": "疑问",
        "en": "Is it hot today?",
        "zh": "今天天气热吗？"
      },
      {
        "kind": "问什么",
        "en": "How is the weather today?",
        "zh": "今天天气怎么样？"
      },
      {
        "kind": "复数",
        "en": "These days are hot.",
        "zh": "这些天天气很热。"
      },
      {
        "kind": "复数否定",
        "en": "These days aren't hot.",
        "zh": "这些天天气不热。"
      },
      {
        "kind": "复数疑问",
        "en": "Are these days hot?",
        "zh": "这些天天气热吗？"
      },
      {
        "kind": "复数问什么",
        "en": "How are the days recently?",
        "zh": "最近天气怎么样？"
      }
    ]
  },
  {
    "n": 46,
    "phrase": "It's cold",
    "lines": [
      {
        "kind": "肯定",
        "en": "It's cold in winter.",
        "zh": "冬天天气很冷。"
      },
      {
        "kind": "否定",
        "en": "It isn't cold in winter.",
        "zh": "冬天天气不冷。"
      },
      {
        "kind": "疑问",
        "en": "Is it cold in winter?",
        "zh": "冬天天气冷吗？"
      },
      {
        "kind": "问什么",
        "en": "How is the weather in winter?",
        "zh": "冬天天气怎么样？"
      },
      {
        "kind": "复数",
        "en": "The winter months are cold.",
        "zh": "冬天的几个月天气很冷。"
      },
      {
        "kind": "复数否定",
        "en": "The winter months aren't cold.",
        "zh": "冬天的几个月天气不冷。"
      },
      {
        "kind": "复数疑问",
        "en": "Are the winter months cold?",
        "zh": "冬天的几个月天气冷吗？"
      },
      {
        "kind": "复数问什么",
        "en": "How are the winter months?",
        "zh": "冬天的几个月天气怎么样？"
      }
    ]
  },
  {
    "n": 47,
    "phrase": "On the table",
    "lines": [
      {
        "kind": "肯定",
        "en": "The plate is on the table.",
        "zh": "盘子在桌子上。"
      },
      {
        "kind": "否定",
        "en": "The plate isn't on the table.",
        "zh": "盘子不在桌子上。"
      },
      {
        "kind": "疑问",
        "en": "Is the plate on the table?",
        "zh": "盘子在桌子上吗？"
      },
      {
        "kind": "问什么",
        "en": "Where is the plate?",
        "zh": "盘子在哪里？"
      },
      {
        "kind": "复数",
        "en": "The plates are on the table.",
        "zh": "这些盘子在桌子上。"
      },
      {
        "kind": "复数否定",
        "en": "The plates aren't on the table.",
        "zh": "这些盘子不在桌子上。"
      },
      {
        "kind": "复数疑问",
        "en": "Are the plates on the table?",
        "zh": "这些盘子在桌子上吗？"
      },
      {
        "kind": "复数问什么",
        "en": "Where are the plates?",
        "zh": "这些盘子在哪里？"
      }
    ]
  },
  {
    "n": 48,
    "phrase": "In the freezer",
    "lines": [
      {
        "kind": "肯定",
        "en": "The ice cream is in the freezer.",
        "zh": "冰淇淋在冷冻室里。"
      },
      {
        "kind": "否定",
        "en": "The ice cream isn't in the freezer.",
        "zh": "冰淇淋不在冷冻室里。"
      },
      {
        "kind": "疑问",
        "en": "Is the ice cream in the freezer?",
        "zh": "冰淇淋在冷冻室里吗？"
      },
      {
        "kind": "问什么",
        "en": "Where is the ice cream?",
        "zh": "冰淇淋在哪里？"
      },
      {
        "kind": "复数",
        "en": "The ice creams are in the freezer.",
        "zh": "这些冰淇淋在冷冻室里。"
      },
      {
        "kind": "复数否定",
        "en": "The ice creams aren't in the freezer.",
        "zh": "这些冰淇淋不在冷冻室里。"
      },
      {
        "kind": "复数疑问",
        "en": "Are the ice creams in the freezer?",
        "zh": "这些冰淇淋在冷冻室里吗？"
      },
      {
        "kind": "复数问什么",
        "en": "Where are the ice creams?",
        "zh": "这些冰淇淋在哪里？"
      }
    ]
  },
  {
    "n": 49,
    "phrase": "Under your bed",
    "lines": [
      {
        "kind": "肯定",
        "en": "The shoes are under your bed.",
        "zh": "鞋子在你的床底下。"
      },
      {
        "kind": "否定",
        "en": "The shoes aren't under your bed.",
        "zh": "鞋子不在你的床底下。"
      },
      {
        "kind": "疑问",
        "en": "Are the shoes under your bed?",
        "zh": "鞋子在你的床底下吗？"
      },
      {
        "kind": "问什么",
        "en": "Where are the shoes?",
        "zh": "鞋子在哪里？"
      },
      {
        "kind": "复数",
        "en": "The pairs of shoes are under your bed.",
        "zh": "几双鞋子在你的床底下。"
      },
      {
        "kind": "复数否定",
        "en": "The pairs of shoes aren't under your bed.",
        "zh": "几双鞋子不在你的床底下。"
      },
      {
        "kind": "复数疑问",
        "en": "Are the pairs of shoes under your bed?",
        "zh": "几双鞋子在你的床底下吗？"
      },
      {
        "kind": "复数问什么",
        "en": "Where are the pairs of shoes?",
        "zh": "几双鞋子在哪里？"
      }
    ]
  },
  {
    "n": 50,
    "phrase": "It's beautiful",
    "lines": [
      {
        "kind": "肯定",
        "en": "The flower is beautiful.",
        "zh": "这朵花很漂亮。"
      },
      {
        "kind": "否定",
        "en": "The flower isn't beautiful.",
        "zh": "这朵花不漂亮。"
      },
      {
        "kind": "疑问",
        "en": "Is the flower beautiful?",
        "zh": "这朵花漂亮吗？"
      },
      {
        "kind": "问什么",
        "en": "What is beautiful?",
        "zh": "什么东西很漂亮？"
      },
      {
        "kind": "复数",
        "en": "The flowers are beautiful.",
        "zh": "这些花很漂亮。"
      },
      {
        "kind": "复数否定",
        "en": "The flowers aren't beautiful.",
        "zh": "这些花不漂亮。"
      },
      {
        "kind": "复数疑问",
        "en": "Are the flowers beautiful?",
        "zh": "这些花漂亮吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What are beautiful?",
        "zh": "哪些东西很漂亮？"
      }
    ]
  },
  {
    "n": 51,
    "phrase": "It's gone",
    "lines": [
      {
        "kind": "肯定",
        "en": "The key is gone.",
        "zh": "钥匙不见了。"
      },
      {
        "kind": "否定",
        "en": "The key isn't gone.",
        "zh": "钥匙还在。"
      },
      {
        "kind": "疑问",
        "en": "Is the key gone?",
        "zh": "钥匙不见了吗？"
      },
      {
        "kind": "问什么",
        "en": "What is gone?",
        "zh": "什么东西不见了？"
      },
      {
        "kind": "复数",
        "en": "The keys are gone.",
        "zh": "这些钥匙不见了。"
      },
      {
        "kind": "复数否定",
        "en": "The keys aren't gone.",
        "zh": "这些钥匙还在。"
      },
      {
        "kind": "复数疑问",
        "en": "Are the keys gone?",
        "zh": "这些钥匙不见了吗？"
      },
      {
        "kind": "复数问什么",
        "en": "What are gone?",
        "zh": "哪些东西不见了？"
      }
    ]
  }
];
