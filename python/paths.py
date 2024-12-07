from pathlib import Path
from pprint import pprint
import json

Path(r"C:\Users\DELL\Downloads")
Path()  # current directory
Path("python/_data_structures.py")
Path() / "files" / "download.pdf"

path = Path.home()
path.exists()
path.is_file()
path.is_dir()
# path.mkdir()
# path.rmdir()

path.name
path.stem
path.parent
path.suffix  # get the extension of a file
path.absolute()


movies = [
    {"id": 1, "title": "terminator", "year": 1989},
    {"id": 2, "title": "all eyes on me", "year": 2016},
    {"id": 3, "title": "the hate you give", "year": 2018},
]

data = json.dumps(movies)
Path("movies.json").write_text(data)
pprint(data)
