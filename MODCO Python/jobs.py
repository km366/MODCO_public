import random
random.seed(1)
companies = []
combinations = {'Web Developer' : ['Computer Science', 'Software Engineering',],
                'Marketing Intern' : ['Business', 'Finance', 'Economics'],
                'Software Developer' : ['Computer Science', 'Software Engineering'],
                'Assistant Nurse' : ['Nursing', 'Health Sciences', 'Biological Sciences'],
                'Database Manager' : ['Computer Science', 'Data Science', 'Software Engineering', 'Information Systems'],
                'Chemical Engineer' : ['Chemical Engineering'],
                'Mechanical Engineer' : ['Mechanical Engineering'],
                'Financial Analyst' : ['Finance', 'Mathematics', 'Economics', 'Business Analytics', 'Business'],
                'Engineering Intern' : ['Engineering', 'Mechanical Engineering', 'Electrical Engineering', 'Computer Engineering'],
                'Commercial Building Plan Reviewer' : ['Civil Engineering', 'Architectural Engineering', 'Mechanical Engineering'],
                'Junior Interior Designer' : ['Interior Design', 'Architecture'],
                'Social Media Manager' : ['English', 'Communications', 'Computer Science', 'Digital Media'],
                'Public Relations Specialist' : ['Communications', 'English'],
                'Games Designer' : ['Game Design and Production', 'Computer Science'],
                'Graphic Designer' : ['Graphic Design', 'Digital Media', 'Product Design', 'Design and Merchandising'],
                'Research Assistant' : ['Biology', 'Health Sciences', 'Nutrition and Foods'],
                'Secruity Technician' : ['Computer Science', 'Computing and Security Technology', 'Software Engineering', 'Computer Engineering'],
                'Field Service Engineer' : ['Electrical Engineering', 'Mechanical Engineering', 'Biomedical Engineering', 'Civil Engineering'],
                'Digital Media Analyst' : ['Digital Media', 'Business', 'Business Analytics', 'Marketing'],
                'Business Analyst' : ['Business', 'Economics']}
locations = ['Center City Philadelphia', 'University City Philadelphia', 'Cherry Hill', 'Baltimore', 'Haddonfield', 'New York', 'Pittsburgh', 'Springfield', 'Moorestown', 'Trenton', 'Wilmington']
paid = ['True', 'True', 'True', 'True', 'False']
majors = ['Accounting', 'Air Force ROTC', 'Animation & Visual Effects', 'Anthropology', 'Architectural Engineering', 'Architecture', 'Army ROTC', 'Art History', 'Behavioral Health Counseling', 'Biological Sciences', 'Biomedical Engineering', 'Business', 'Business and Engineering', 'Business Analytics', 'Business Administration', 'Business Economics', 'Chemical Engineering', 'Chemistry', 'Chemistry-Biochemistry Concentration', 'Civil Engineering', 'Communication', 'Computer Engineering', 'Computer Science', 'Computing and Security Technology', 'Construction Management', 'Criminology and Justice Studies', 'Culinary Arts & Science', 'Custom-Designed Major', 'Dance', 'Data Science', 'Design and Merchandising', 'Design of Learning Technologies', 'Digital Media', 'Economics', 'Electrical Engineering', 'Elementary Education', 'Engineering', 'Engineering Management', 'Engineering Technology', 'English', 'English / Publishing', 'Entertainment and Arts Management', 'Entrepreneurship and Innovation', 'Environmental Engineering', 'Environmental Science', 'Environmental Studies and Sustainability', 'Fashion Design', 'Film and TV Production', 'Finance', 'Game Design and Production', 'General Business', 'General Studies', 'Geoscience', 'Global Studies', 'Global Studies / Public Health', 'Graphic Design', 'Health Sciences', 'Health Services Administration', 'History', 'Hospitality Management', 'Information Systems', 'Interactive Digital Media', 'International Business', 'Interior Design', 'Legal Studies', 'Management Information Systems', 'Marketing', 'Materials Science and Engineering', 'Mathematics', 'Mechanical Engineering', 'Music Industry', 'Navy ROTC', 'Nursing', 'Nursing: RN-MSN Bridge Program', 'Nursing: Accelerated', 'Nutrition and Foods', 'Nutrition Sciences: Accelerated', 'Operations and Supply Chain Management', 'Organizational Management', 'Philosophy', 'Photography', 'Physics', 'Political Science', 'Product Design', 'Psychology', 'Public Health', 'Public Health: Accelerated', 'Real Estate Management and Development', 'ROTC', 'Screenwriting & Playwriting', 'Sociology', 'Software Engineering', 'Sport Management', 'Sport Management / Business Administration', 'Systems Engineering', 'Teacher Education', 'Technology Innovation Management', 'Virtual Reality & Immersive Media', 'Westphal Studies Program']
com = open('new_companies.txt', 'r')
for i in com.readlines():
    temp = i.replace(' \n', '')
    companies.append(temp)
c = 0
jobs = open('jobs.txt', 'a+')
jobs.truncate(0)
while c <= 49:
    l = []
    f = open('template.txt', 'r')
    for i in f.readlines():
        l.append(i)
    l[1] = l[1].replace('i.d.', str(c))
    company_remove = random.choice(companies)
    l[2] = l[2].replace('company', company_remove)
    companies.remove(company_remove)
    title = random.choice(list(combinations.keys()))
    l[3] = l[3].replace('title', title)
    l[4] = l[4].replace('bool', random.choice(paid))
    k = 0
    store = ''
    while k < len(combinations[title]):
        major_id = 0
        for i, j in enumerate(majors):
            if combinations[title][k] == j:
                if k == len(combinations[title])-1:
                    store += str(i)
                else:
                   store += str(i)+', ' 
        k += 1
    l[5] = l[5].replace('i.d.', store)
    l[5] = l[5].replace('Major ', 'Major')
    l[6] = l[6].replace('location', random.choice(locations))
    if c == 49:
        l[7] = l[7].replace(',', '')
    c += 1
    for i in l:
        jobs.write(i)
    f.close()     
jobs.close()
