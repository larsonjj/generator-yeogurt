## This documentation is for the old dashboard from v0.4.x versions of this generator

## Dynamic Dashboard
Here is what the dashboard looks like:<br>
![](http://i.imgur.com/yW4QC3e.png =650x)

It is 'dynamic' because it is generated at compile time using comments placed at the top of development files. An example of these comments in a template file is as follows:

```
//- Dashboard Data
    !##
    {
        "status": "development",
        "blocks": [
            {
                "blockName": "content",
                "width": "100px",
                "height": "100px",
                "bgcolor": "#9d9d9d",
                "textColor": "#fff",
                "fontSize": "10px"
            }
        ]
    }
    ##!
```
For pages, components, templates, and helpers, these comments create the ability to pass data directly to the dashboard. In the above code example, we are setting a template file's status to be in 'development' and are adding a content block with a name of 'content' and a couple of CSS properties.

### Data Properties

##### Pages, Helpers, Templates, and Components
property:

- `status` [String]

possible values:

- `blocked`: When development is blocked from continuing
- `queued`: Ready to be assigned to a developer
- `development`: Development is under way
- `qa`: Being tested and evaluated for correct implementation
- `review`: 'Under review from code quality stand-point',
- `integration`: Being integrated to final development environment (Usually for Content Managment Systems)
- `Complete`: 'Development is complete'

##### Templates Only
property:

- `blocks` [Array]

possible values [Each object in Array]:

- `blockName`: Name that will be displayed within the created block
- `width`: Width of block
- `height`: Height of block
- `bgcolor`: Background color of block
- `textColor`: Color of text within block
- `fontSize`: Size of font within block

##### Helpers and Components Only
property:

- `markup` [String]

possible values

- `Any Jade Markup`

#### Huh?

A bit confused? No worries, I recommend generating a test project and taking a look at the jade files within the generated pages, components, templates, and helpers folders. They will have some simple examples of what's possible and you can see your changes if you run `grunt serve`.

Also, feel free to open up an issue if you think something is too confusing or can be improved.
