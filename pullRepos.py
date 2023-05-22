from github import Github

g = Github("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")

repositories = []

for repo in g.get_organization("oca-org").get_repos():
    repositories.append({"name": repo.name, "size": repo.size})

sorted_repositories = sorted(repositories, key=lambda repo : -repo["size"])


del sorted_repositories[0]

for i in range(5) :
    print(sorted_repositories[i]["name"])