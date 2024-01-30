# merge-lab.github.io
Liberally stealing formats and ideas from:
* [this fork](https://github.com/clearoboticslab/clearoboticslab.github.io) of the [Kording lab's theme](https://github.com/KordingLab/KordingLab.github.io)
* [Jon Barron's](https://github.com/jonbarron/website) classic research publication formatting
* [my personal website](https://github.com/ltchin/ltchin.github.io)

Logo designed by [Grace Amos](https://www.linkedin.com/in/gsoma). She's amazing!


# Running Locally
1. [Install Hugo](https://gohugo.io/installation/)
2. Run `hugo server`
3. Go to `localhost:1313` or similar in your browser and you should see the website!

# Editing the website
All of the CSS should have been completed by Lilly so all you should need to focus on is in the `content` folder.

* `news.md` is where we add new happenings to the lab
* `publications.md` is where we give brief summaries of new papers that have come out. The auto generating table format is a bit finnicky, so you'll have to do a mix of Markdown and HTML. Following the existing format should show you how it's done!

## Adding your own people page, news item, etc.
Submit a pull request following the existing format on the website

# Publishing your changes
1. Run `hugo --gc --minify` to build a `docs` folder
2. `git push` it 