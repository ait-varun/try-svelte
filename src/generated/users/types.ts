export default {
    "scalars": [
        4,
        5,
        6,
        7
    ],
    "types": {
        "Query": {
            "user": [
                2,
                {
                    "id": [
                        5
                    ]
                }
            ],
            "users": [
                2
            ],
            "todos": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "UpdateTodoInput": {
            "id": [
                5
            ],
            "description": [
                5
            ],
            "done": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "User": {
            "id": [
                5
            ],
            "name": [
                5
            ],
            "email": [
                5
            ],
            "todos": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "Todo": {
            "id": [
                5
            ],
            "description": [
                5
            ],
            "done": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "Int": {},
        "String": {},
        "Float": {},
        "Boolean": {},
        "Mutation": {
            "updateTodo": [
                3,
                {
                    "input": [
                        1,
                        "UpdateTodoInput!"
                    ]
                }
            ],
            "__typename": [
                5
            ]
        }
    }
}