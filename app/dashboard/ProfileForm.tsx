'use client';

export function ProfileForm({ user }: any) {

    const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const body = {
            name: formData.get('name'),
            bio: formData.get('bio'),
            age: formData.get('age'),
            image: formData.get('image'),
        };

        const res = await fetch('/api/user', {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        await res.json();
    };

    return (
        <div className="flex flex-col px-8 py-10">
            <h2>Edite seu perfil</h2>
            <form onSubmit={updateUser} className="flex flex-col gap-2">
                <label htmlFor="name">Nome</label>
                <input className="border-2 border-gray-200" type="text" name="name" defaultValue={user?.name ?? ''} />
                <label htmlFor="bio">Bio</label>
                <textarea
                    className="border-2 border-gray-300"
                    name="bio"
                    cols={30}
                    rows={10}
                    defaultValue={user?.bio ?? ''}
                ></textarea>
                <label htmlFor="age">Idade</label>
                <input className="border-2 border-gray-200" type="text" name="age" defaultValue={user?.age ?? 0} />
                <label htmlFor="image">Url da imagem</label>
                <input className="border-2 border-gray-200" type="text" name="image" defaultValue={user?.image ?? ''} />

                <button className="bg-blue-900 text-white py-2" type="submit">Salvar</button>
            </form>
        </div>
    );
}