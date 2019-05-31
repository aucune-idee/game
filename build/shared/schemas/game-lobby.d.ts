export declare var GameLobbySchema: {
    _id: NumberConstructor;
    name: StringConstructor;
    searchName: StringConstructor;
    owner: NumberConstructor;
    type: {
        type: StringConstructor;
        enum: string[];
    };
    members: {
        _userId: NumberConstructor;
        army: {
            type: StringConstructor;
            enum: string[];
        };
    }[];
};
