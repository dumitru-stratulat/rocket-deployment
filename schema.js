const axios = require('axios')

const { 
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLSchema,

} = require('graphql')

const LaunchType = new GraphQLObjectType({
    name: 'Launch',
    fields: () =>({
        flight_number: { type: GraphQLInt},
        mission_name: { type: GraphQLString },
        launch_year: { type: GraphQLString},
        launch_date_local: { type: GraphQLString},
        launch_success: { type: GraphQLBoolean},
        rocket: { type: RocketType }
    })
});

const RocketType = new GraphQLObjectType({
    name: 'Rocket',
    fields: () =>({
        rocket_id: { type: GraphQLString },
        rocket_name: { type: GraphQLString },
        rocket_type: { type: GraphQLString },
    })
});

const UserInfo = new GraphQLObjectType({
    name: 'User',
    fields: () =>({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        user_name: { type: GraphQLString },
        email: { type: GraphQLString },
        address: { type: UserAddress }
    })
})

const UserAddress = new GraphQLObjectType({
    name: 'UserAddress',
    fields: () =>({
        street: { type: GraphQLString },
        suite: { type: GraphQLString },
        city: { type: GraphQLString },
        geo: { type: UserGeoLocation }
    })
})

const UserGeoLocation = new GraphQLObjectType({
    name: 'UserGeoLocation',
    fields: () =>({
        lat: { type: GraphQLString },
        lng: { type: GraphQLString }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        users: {
            type: new GraphQLList(UserInfo),
            async resolve(parent, args) {
                  return axios
                    .get('https://jsonplaceholder.typicode.com/users')
                    .then(function(res){ 
                        // console.log('res.data',res.data[0])
                        return res.data }
                    );

            }
        },
        launches: {
            type: new GraphQLList(LaunchType),
            args: {
                first: { type: GraphQLInt}
            },
            
            resolve(parent, args) {
               
                return axios
                    .get('https://api.spacexdata.com/v3/launches/')
                    .then(function(res){ 
                        const maxItems = res.data.filter(v => v.flight_number < args.first + 1)
                        return maxItems
                    }
                    );

            }
        },
        launch: {
            type: LaunchType,
            args: {
                flight_number: { type: GraphQLInt }
            },
            resolve(parent,args){
                return axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
                    .then(res => res.data)
            }
        },
        rockets: {
            type: new GraphQLList(LaunchType),
            resolve(parent, args) {
                return axios
                    .get('https://api.spacexdata.com/v3/rockets/')
                    .then(res => res.data);
            }
        },
        rocket: {
            type: RocketType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve(parent,args){
                return axios.get(`https://api.spacexdata.com/v3/rockets/${args.id}`)
                    .then(res => res.data)
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
})
