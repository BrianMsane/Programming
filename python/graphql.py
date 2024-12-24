"""Learning the basics of GraphQL
"""

import strawberry  # type: ignore
from strawberry.fastapi import GraphQLRouter  # type: ignore
from fastapi import FastAPI


# 1. Defining the schema


@strawberry.type
class Book:
    title: str
    author: str


@strawberry.type
class Query:
    book: Book = strawberry.field(
        resolver=lambda: Book(title="The world is flat", author="Thomas L. Friedman")
    )


schema = strawberry.Schema(query=Query)


# 2. Serving the schema with FastAPI

app = FastAPI()
graphql_app = GraphQLRouter(schema)
app.include_router(graphql_app, prefix="graphql")
