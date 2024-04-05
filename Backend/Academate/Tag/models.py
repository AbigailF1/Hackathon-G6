from django.db import models
from django.contrib.auth.models import User
from django.contrib.contenttypes.models import ContentType

class Tag (models.Model):
    tag_title = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.tag_title

class TagList(models.Model):
    tag = models.ManyToManyField('Tag')
    created_by = models.ForeignKey(User, on_delete=models.CASCADE ,default=1)
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    def __str__(self):
        return self.name

# tag_list, _ = TagList.objects.get_or_create(app_label="Feed") 

# # Define the initial tag titles
# initial_tag_titles = [
#     # Software Developers Team (DevSquad) related tags
#     "Frontend Development",
#     "Backend Development",
#     "Full Stack Development",
#     "Web Development",
#     "Mobile App Development",
#     "JavaScript",
#     "React",
#     "Vue.js",
#     "Angular",
#     "Django",
#     "Flask",
#     "Python",
#     "Java",
#     "C++",
#     "C#",
#     "Ruby",
#     "PHP",
#     "Node.js",
#     "RESTful API",
#     "GraphQL",
#     "SQL",
#     "NoSQL",
#     "Git",
#     "CI/CD",
#     "Agile Development",
#     "Scrum",
#     "Kanban",
#     "Unit Testing",
#     "Integration Testing",
#     "Test-Driven Development",
#     "Responsive Design",
#     "UI/UX Design",
#     "Design Patterns",
#     "Software Architecture",
#     "Microservices",
#     "Serverless",
#     "Cloud Computing",
#     "AWS",
#     "Azure",
#     "Google Cloud",
#     "DevOps",
#     "Containerization",
#     "Docker",
#     "Kubernetes",
#     "Monitoring and Logging",
#     "Security Best Practices",
#     # Add more tags related to software development

#     # Space Team (SpaceExplorers) related tags
#     # Research Enthusiasts (ResearchRangers) related tags
#     # Innovation Team (InnoForce) related tags
#     # STEM Scholars Team (STEMGenius) related tags
#     # Artificial Intelligence & Machine Learning Team (AI Titans) related tags
#     # Sustainability Team (EcoWarriors) related tags
#     # Cybersecurity Team (Cybersoldiers) related tags
# ]

# # Create and associate Tag instances with the TagList
# for tag_title in initial_tag_titles:
#     tag, _ = Tag.objects.get_or_create(tag_title=tag_title)
#     tag_list.tags.add(tag)