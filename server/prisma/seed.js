import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function seed() {
    await prisma.post.deleteMany()
    await prisma.user.deleteMany()
    const kyle = await prisma.user.create({ data: { name: "Kyle" } })
    const sally = await prisma.user.create({ data: { name: "Sally" } })

    const post1 = await prisma.post.create({
        data: {
            body: "How do you guys cope with this stress. I recently graduated as a Computer science student from the US. I've applied to dozens of company. Just because I don't have experience, I've never been able to get an interview. On top of that, being an international student, its too much pressure. :/",
            title: "Tired of job hunting as a recent graduate",
        }
    })

    const post2 = await prisma.post.create({
        data: {
            body: "Where are you guys finding these entry level jobs? I’m dying out here. I don’t care about the money being great, I just wanna work and get some more experience. Anybody know what I should do?",
            title: "Fresh grad (May 2022) but can’t find work?",
        }
    })

    const post3 = await prisma.post.create({
        data: {
            body: "I honestly don't understand what I am doing wrong, especially because I have other friends who graduated last spring who found a job in CS less than a month after graduating. I've revised my resume at least a dozen times over the past few months, and done my best to make connections with recruiters for the positions I'm applying for. Is the job market just really rough right now or am I really unlucky?",
            title: "Finding a job as a fresh grad junior",
        }
    })

    const post4 = await prisma.post.create({
        data: {
            body: "I'm graduating in 3 months, and I'm kind of having a breakdown because every sysadmin job requires experience which is something I don't have. I totally understand that no one wants to employ a sysadmin without experience, but what type of jobs should I be even looking for ? I'm panicking if I will even be able to get a job...",
            title: "What to do as a fresh graduate with zero experience?",
        }
    })

    const post5 = await prisma.post.create({
        data: {
            body: "I’ve been job hunting for almost eight months post-grad and I’m so sick and tired. I’m stuck in a low-end admin job I hate, I keep getting told to tailor my CV and write cover letters when no one reads them, everyone is wondering what I’m doing with my life, my boomer parents don’t understand. I just want to earn a living in the field I graduated in so I can move out of my toxic parents’ home. I’ve also tried roles outside of my field like call centres, sales and full time admin - to no avail. I didn’t know at 18 that a Politics degree was a useless major and I feel like I’m being gaslighted and punished for it. I have tried EVERYTHING you can name of, I’ve polished the CV, cover letter, the LinkedIn account, applied like a robot non-stop, dug for job boards, sent cold emails to recruiters higher-ups in companies I want to work for, gone to networking events. I’ve listened to Austin Belcock and other smarmy recruiters gaslight me and I’m fed up. I feel like giving up.",
            title: "Thinking of giving up: Discouraged fresh grad",
        }
    })

    const post6 = await prisma.post.create({
        data: {
            body: "I've a friend who graduated in Dec and has only been applying to well-known companies for SWE roles. They've been getting the occasional interview, but no offers yet. I heard 6 months is normal?",
            title: "How long should it take a fresh grad to find a job?",
        }
    })

    const post7 = await prisma.post.create({
        data: {
            body: "feeling really dejected from job searching. started early since Aug last year and no luck still, just sucks to know that my uni life was spent building up a portfolio and chasing multiple internships at reputable companies. have alr tried refining my resume and interview skills to the best of my abilities maybe it’s just a me problem but I don’t know what else I can do at this point",
            title: "2023 grads, anyone feels the same?",
        }
    })

    const post8 = await prisma.post.create({
        data: {
            body: "I've had some friends suggest looking for an internship, but is that even possible since I've already graduated? I've just been working on projects to boost my resume. I feel like it's impossible to get hired in this market with no real experience. Unsure of what I should do next to get my foot in the door.",
            title: "Recent grad with no internships struggling to find a job",
        }
    })

    const post9 = await prisma.post.create({
        data: {
            body: " ",
            title: "Testing",
        }
    })

    const post10 = await prisma.post.create({
        data: {
            body: "  ",
            title: "Testing",
        }
    })
    const post11 = await prisma.post.create({
        data: {
            body: " ",
            title: "Testing",
        }
    })

    const post12 = await prisma.post.create({
        data: {
            body: "  ",
            title: "Testing",
        }
    })
    const post13 = await prisma.post.create({
        data: {
            body: " ",
            title: "Testing",
        }
    })

    const post14 = await prisma.post.create({
        data: {
            body: "  ",
            title: "Testing",
        }
    })

    const post15 = await prisma.post.create({
        data: {
            body: " ",
            title: "Testing",
        }
    })

    const post16 = await prisma.post.create({
        data: {
            body: "  ",
            title: "Testing",
        }
    })
    const post17 = await prisma.post.create({
        data: {
            body: " ",
            title: "Testing",
        }
    })

    const post18 = await prisma.post.create({
        data: {
            body: "  ",
            title: "Testing",
        }
    })
    const post19 = await prisma.post.create({
        data: {
            body: " ",
            title: "Testing",
        }
    })

    const post20 = await prisma.post.create({
        data: {
            body: "  ",
            title: "Testing",
        }
    })

    const comment1 = await prisma.comment.create({
        data: {
            message: "I am a root comment",
            userId: kyle.id,
            postId: post1.id,
        },
    })

    const comment2 = await prisma.comment.create({
        data: {
            parentId: comment1.id,
            message: "I am a nested comment",
            userId: sally.id,
            postId: post1.id,
        },
    })

    const comment3 = await prisma.comment.create({
        data: {
            message: "I am a root comment",
            userId: sally.id,
            postId: post1.id,
        },
    })
}

seed()