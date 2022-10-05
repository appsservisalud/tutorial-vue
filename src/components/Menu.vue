<template>
                <nav>
                <ul>
                <li class="nav-item">

                <router-link to="/login" @click="show()"><span> <img src="https://drive.google.com/uc?export=download&id=14M2PmG8eS1zv-uQbSOXj5YQa62j2ACHH" width="30" height="30" alt=""></span><input v-model="status_session"/></router-link> 
                {{status_session}}
                </li>
                </ul>
        </nav>
<router-view/>
</template>


