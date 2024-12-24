import sqlite3
import json
from pathlib import Path

movies = json.loads(Path("movies.json").read_text())

# write data to DB
with sqlite3.connect("db.sqlite3") as conn:
    command = "INSERT INTO movies VALUES(?, ?, ?)"
    for movie in movies:
        conn.execute(command, tuple(movie.values()))
    conn.commit()

# reading data from DB
with sqlite3.connect("db.sqlite3") as conn:
    command = "SELECT * FROM movies"
    cursor = conn.execute(command)
    movies = cursor.fetchall()
    print(movies)
