from github import Github

token = "ghp_LllIA28Al7H BxZlraiDWC R04hXLru745q4 MT"

token = token.replace(" ", "")

g = Github(token)

repositories = []

for repo in g.get_organization("oracle").get_repos():
    repositories.append({"name": repo.name, "size": repo.size})

sorted_repositories = sorted(repositories, key=lambda repo : -repo["size"])

del sorted_repositories[0]
del sorted_repositories[0]

for i in range(15) :
    print(sorted_repositories[i]["name"])