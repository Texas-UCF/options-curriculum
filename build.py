from staticjinja import make_site
from collections import OrderedDict as od
def get_sections():
  sections = od([
    ('Basic Terminology', od(
        [
          ('Derivatives', 'derivatives.html'),
          ('Calls and Puts', 'calls_and_puts.html'),
          ('Optionality', 'optionality.html'),
          ('Contract Specifications', 'contract_specifications.html'),
          ('Exercising', 'when_to_exercise.html'),
          ('Moneyness', 'moneyness.html'),
          ('Downside vs Upside', 'down_upside.html'),
          ('Cost of Options', 'options_cost.html'),
        ]
      )
    ),
    ('Profit Diagrams', od(
        [
          ('Payoff', 'payoff_diagram.html'),
          ('Profit at Expiration', 'profit_at_expiration.html'),
        ]
      )
    )
    ]
  )
  return {'sections': sections}

def get_contents(template):
  with open(template.filename) as f:
    return {'page': f.read()}

if __name__ == '__main__':
  site = make_site(
      contexts=[
        ('.*.html', get_sections),
      ],
      outpath=".",
      staticpaths=['static'],
    )

  site.render(use_reloader=True)
